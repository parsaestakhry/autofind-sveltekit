import { getUserFromDb } from '$lib/server/GetUserDb';
import { connection } from '$lib/db/mysql';

export async function POST(event: any) {
	const body = await event.request.json();
	const username = body.username;
	const registration = body.registration;
	const fill = body.fill;
	// Attempt to retrieve the user from the database
	const user: any = await getUserFromDb(username);

	// Check if user is found and handle the scenario where the user might not exist
	if (!user || !user.body || user.body.length === 0) {
		throw new Error('User not found');
	}

	const id = user.body[0].id;

	//check if the car is saved before 
	let results = await connection
		.query(
			`SELECT * FROM saved_cars WHERE registration = "${registration}" AND user_id = "${id}"`
		)
		.then(function ([rows, fields]) {
			return rows;
		});
	

	// Attempt to insert into the database
	if (!fill) {
		let results = await connection
			.query(
				`INSERT INTO saved_cars (user_id, registration) 
                 VALUES (?, ?);`,
				[id, registration]
			)
			.then(function ([rows, fields]) {
				return rows;
			});
		//console.log(results);
		return new Response(JSON.stringify(body), { status: 200 });
	} else {
		let results = await connection
			.query(`DELETE FROM saved_cars WHERE registration = "${registration}" AND user_id = "${id}"`)
			.then(function ([rows, fields]) {
				return rows;
			});
		return new Response(JSON.stringify(body), { status: 200 });
	}
}
