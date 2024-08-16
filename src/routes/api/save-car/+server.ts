import { getUserFromDb } from '$lib/server/GetUserDb';
import { connection } from '$lib/db/postgres'; // Update the import to use PostgreSQL connection

export async function POST(event: any) {
	const body = await event.request.json();
	const username = body.username;
	const registration = body.registration;
	const fill = body.fill;

	// Attempt to retrieve the user from the database
	const user: any = await getUserFromDb(username);

	// Check if user is found and handle the scenario where the user might not exist
	if (!user || !user.body || user.body.length === 0) {
		return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
	}

	const id = user.body[0].id;

	// Check if the car is saved before
	let results = await connection
		.query(
			`SELECT * FROM saved_cars WHERE registration = $1 AND user_id = $2`,
			[registration, id] // Use parameters to prevent SQL injection
		)
		.then((result: { rows: any }) => result.rows);

	// Attempt to insert into the database
	if (!fill) {
		await connection.query(
			`INSERT INTO saved_cars (user_id, registration) VALUES ($1, $2)`,
			[id, registration] // Use parameters
		);
		return new Response(JSON.stringify(body), { status: 200 });
	} else {
		await connection.query(
			`DELETE FROM saved_cars WHERE registration = $1 AND user_id = $2`,
			[registration, id] // Use parameters
		);
		return new Response(JSON.stringify(body), { status: 200 });
	}
}
