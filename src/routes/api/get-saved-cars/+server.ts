import { connection } from '$lib/db/mysql';
import type { Car } from '$lib/server/GetCars';
import { getUserFromDb } from '$lib/server/GetUserDb';
import { json } from 'stream/consumers';

export async function POST(event: any) {
	const body = await event.request.json();
	const username = body.username;
	const user: any = await getUserFromDb(username);

	// Check if user is found and handle the scenario where the user might not exist
	if (!user || !user.body || user.body.length === 0) {
		throw new Error('User not found');
	}

	const id = user.body[0].id;

	const query = `SELECT * FROM car WHERE registration = (SELECT registration FROM saved_cars WHERE user_id = "${id}")`;

	let results = await connection
		.query(query)
		.then(function ([rows, fields]) {
			return rows as Car[]
		});
	//console.log(results);
	return new Response(JSON.stringify(results))
}
