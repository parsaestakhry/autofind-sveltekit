import fs from 'fs';
import path from 'path';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string | null;
		const registration = formData.get('registration') as string | null;

		if (!username) {
			return {
				status: 400,
				body: {
					message: 'Username is required'
				}
			};
		}

		if (!registration) {
			return {
				status: 400,
				body: {
					message: 'Registration is required'
				}
			};
		}

		const frontImage = formData.get('front-image') as File | null;
		const rearImage = formData.get('rear-image') as File | null;
		const driverImage = formData.get('driver-image') as File | null;
		const passengerImage = formData.get('passenger-image') as File | null;

		const userDirectory = path.join('uploads', username);
		const carDirectory = path.join(userDirectory, registration);

		// Ensure the user's directory exists
		if (!fs.existsSync(userDirectory)) {
			fs.mkdirSync(userDirectory, { recursive: true });
		}

		// Ensure the car's directory exists
		if (!fs.existsSync(carDirectory)) {
			fs.mkdirSync(carDirectory, { recursive: true });
		}

		const saveFile = async (file: File, fileName: string) => {
			const filePath = path.join(carDirectory, fileName);
			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			fs.writeFileSync(filePath, buffer);
		};

		const files = [
			{ file: frontImage, name: 'front' },
			{ file: rearImage, name: 'rear' },
			{ file: driverImage, name: 'driver' },
			{ file: passengerImage, name: 'passenger' }
		];

		for (const { file, name } of files) {
			if (file && file.size > 0) {
				const fileName = `${Date.now()}-${name}-${file.name}`;
				await saveFile(file, fileName);
			}
		}

		return {
			status: 200,
			body: {
				message: 'Files uploaded successfully'
			}
		};
	}
};
