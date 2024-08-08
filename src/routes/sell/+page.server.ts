import fs from 'fs';
import path from 'path';
import type { Actions } from '@sveltejs/kit';
import { connection } from '$lib/db/mysql';
import { getUserFromDb } from '$lib/server/GetUserDb';
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const registration = formData.get('registration') as string | null;
		const make = formData.get('make') as string | null;
		const model = formData.get('model') as string | null;
		const price = formData.get('price') as number | null;
		const color = formData.get('color') as string | null;
		const milage = formData.get('milage') as number | null;
		const year = formData.get('year') as number | null;
		const type = formData.get('chasis') as string | null;
		const fuel = formData.get('fuel') as string | null;
		const engine = formData.get('engine') as string | null;
		const transmission = formData.get('transmission') as string | null;
		const description = formData.get('description') as string | null;
		const user: any = await getUserFromDb(username);
		//console.log()
		// Check if user is found and handle the scenario where the user might not exist
		if (!user || !user.body || user.body.length === 0) {
			throw new Error('User not found');
		}

		const id = user.body[0].id;
		function formatDate(date: Date) {
			var d = new Date(date),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;

			return [year, month, day].join('-');
		}

		let results = await connection
			.query(
				` insert into car (type, Color, fuel_type, model, make, milage, year_make, engine_model, gearbox, price, registration, description, date_added) 
              values ("${type}", "${color}", "${fuel}", "${model}", "${make}" , "${milage}",  "${year}" , "${engine}" , "${transmission}" , "${price}" , "${registration}" , "${description}", "2024-01-01" );`
			)
			.then(function ([rows, fields]) {
				return rows;
			});
		// console.log(results);
		let newResults = await connection
			.query(
				` insert into sell (user_id, registration) 
              values ("${id}", "${registration}");`
			)
			.then(function ([rows, fields]) {
				return rows;
			});

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
		const rearImage = formData.get('rear-image') as File | null;
		const driverImage = formData.get('driver-image') as File | null;
		const passengerImage = formData.get('passenger-image') as File | null;

		// Construct paths for the user's directory and car directory
		const carDirectory = path.join('uploads', registration);

		// Ensure the car's directory exists
		if (!fs.existsSync(carDirectory)) {
			fs.mkdirSync(carDirectory, { recursive: true });
		}

		// Function to save the file with a generated name
		const saveFile = async (file: File, baseName: string) => {
			const extension = path.extname(file.name); // Extract the file extension from the original name
			const fileName = `${baseName}${extension}`; // Construct the new file name without timestamp
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
			{ file: rearImage, baseName: 'rear' },
			{ file: driverImage, baseName: 'driver' },
			{ file: passengerImage, baseName: 'passenger' }
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
