import fs from 'fs';
import path from 'path';
import type { Actions } from '@sveltejs/kit';
import { connection } from '$lib/db/postgres';
import { getUserFromDb } from '$lib/server/GetUserDb';
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const registration = formData.get('registration') as string | null;
		let make = formData.get('make') as string ;
		const model = formData.get('model') as string | null;
		const price = formData.get('price') as number | null;
		const color = formData.get('color') as string | null;
		const mileage = formData.get('mileage') as number | null;
		const year = formData.get('year') as number | null;
		const type = formData.get('chasis') as string | null;
		const fuel = formData.get('fuel') as string | null;
		const engine = formData.get('engine') as string | null;
		const transmission = formData.get('transmission') as string | null;
		const description = formData.get('description') as string | null;
		const user: any = await getUserFromDb(username);
		make = make.toUpperCase()
		//console.log()
		// Check if user is found and handle the scenario where the user might not exist
		if (!user || !user.body || user.body.length === 0) {
			throw new Error('User not found');
		}

		const id = user.body[0].id;
		

		// Insert into car table
		await connection.query(
			`INSERT INTO car (type, color, fuel_type, model, make, mileage, year_make, engine_model, gearbox, price, registration, description, date_added) 
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
			[
				type,
				color,
				fuel,
				model,
				make,
				mileage,
				year,
				engine,
				transmission,
				price,
				registration,
				description,
				'2024-01-01'
			]
		);

		// Insert into sell table
		await connection.query(
			`INSERT INTO sell (user_id, registration) 
			VALUES ($1, $2)`,
			[id, registration]
		);

		// console.log(formData);
		if (!username) {
			return {
				status: 400,
				body: {
					message: 'Username is required'
				}
			};
		}

		// Check if registration is provided
		if (!registration) {
			return {
				status: 400,
				body: {
					message: 'Registration is required'
				}
			};
		}

		// Retrieve image files from the form data
		const frontImage = formData.get('front-image') as File | null;
		

		// Construct paths for the user's directory and car directory
		const carDirectory = path.join('src');

		// Ensure the car's directory exists
		if (!fs.existsSync(carDirectory)) {
			fs.mkdirSync(carDirectory, { recursive: true });
		}

		// Function to save the file with a generated name
		const saveFile = async (file: File, baseName: string) => {
			const extension = path.extname(file.name); // Extract the file extension from the original name
			const fileName = `${registration}${extension}`; // Construct the new file name without timestamp
			const filePath = path.join(carDirectory, fileName); // Construct the full file path

			// Convert the file to an array buffer and then to a buffer
			const arrayBuffer = await file.arrayBuffer();
			const buffer = new Uint8Array(arrayBuffer); // Use Uint8Array for compatibility

			// Write the buffer to the file system
			fs.writeFileSync(filePath, buffer);
		};

		// Define the files to be saved along with their base names
		const files = [
			{ file: frontImage, baseName: 'front' },
			
		];

		// Iterate through each file and save it if it exists and has size
		for (const { file, baseName } of files) {
			if (file && file.size > 0) {
				await saveFile(file, baseName);
			}
		}

		// Return a success response
		return {
			status: 200,
			body: {
				message: 'Files uploaded successfully'
			}
		};
	}
};
