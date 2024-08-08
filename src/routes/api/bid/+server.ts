import { connection } from '$lib/db/mysql';
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
			` insert into bid (user_id, registration, amount) 
              values ("${id}", "${registration}", "${amount}");`
		)
		.then(function ([rows, fields]) {
			return rows;
		});

	return new Response(JSON.stringify(body));
}
