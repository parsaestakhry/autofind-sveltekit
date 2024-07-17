/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/mysql';
import type { Car } from '$lib/server/GetCars';
export async function POST(event: any) {
	const body = await event.request.json();
	//console.log('request body: ', body);
	const choice = body.makeChoice;
	//console.log(choice);
	const modelQuery = `SELECT * FROM car WHERE make = "${choice}" AND model = "${""}`
	let results: Car[] | null = await connection
		.query(`SELECT * FROM car WHERE make = "${choice}" `)
		.then(function ([rows, fields]) {
			//console.log(rows)
			return rows as Car[];
		});

	return new Response(JSON.stringify(results));
}
