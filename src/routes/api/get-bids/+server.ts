import { connection } from '$lib/db/postgres';
import type { Car } from '$lib/server/GetCars';
import { getUserFromDb } from '$lib/server/GetUserDb';
import { json } from 'stream/consumers';

export async function POST(event: any) {
	const body = await event.request.json();
	const registration = body.registration;

	let results = await connection
		.query(
			`SELECT "bid"."bid_amount", "user"."username"
			FROM "bid" 
			JOIN "user" ON "bid"."user_id" = "user"."id" 
			WHERE "bid"."registration" = $1`,
			[registration] // Pass the registration value as a parameter
		)
		.then((result) => {
			return result.rows; // Access the rows directly
		});

	return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
}
