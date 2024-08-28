import fs from 'fs';
import path from 'path';

export async function POST(event: any) {
	try {
		// Get the registration value from the request body
		const body = await event.request.json();
		const registration = body.registration;

		// Log the registration for debugging
		console.log(registration);

		// Construct the image path based on the registration value
		const imagePath = path.join('src', `${registration}.jpg`);

		// Check if the file exists
		if (fs.existsSync(imagePath)) {
			// Read the image file
			const imageBuffer = fs.readFileSync(imagePath);

			// Return the image in the response with the appropriate content type
			return new Response(imageBuffer, {
				headers: {
					'Content-Type': 'image/jpeg'
				}
			});
		} else {
			// Return a 404 response if the image does not exist
			return new Response('Image not found', { status: 404 });
		}
	} catch (error) {
		console.error('Error retrieving image:', error);
		return new Response('Internal server error', { status: 500 });
	}
}
