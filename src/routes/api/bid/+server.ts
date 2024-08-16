import { connection } from '$lib/db/postgres';
import { getUserFromDb } from '$lib/server/GetUserDb';
export async function POST(event: any) {
	const body = await event.request.json();
	console.log(body);
	const amount = body.bidValue;
	const username = body.username;
	const registration = body.registration;
	const user: any = await getUserFromDb(username);
	//console.log()
	// Check if user is found and handle the scenario where the user might not exist
	if (!user || !user.body || user.body.length === 0) {
		throw new Error('User not found');
	}

	const id = user.body[0].id;
	await connection
		.query(
			`INSERT INTO bid (user_id, registration, bid_amount) 
         VALUES ($1, $2, $3)`,
			[id, registration, amount] // Pass the values as parameters
		)
		.then(function (result) {
			return result; // Optionally return the result or handle it as needed
		});

	return new Response(JSON.stringify(body));
}
