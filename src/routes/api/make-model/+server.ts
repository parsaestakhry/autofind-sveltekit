/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/mysql';
import type { Car } from '$lib/server/GetCars';
export async function POST(event: any) {
	const body = await event.request.json();
	//console.log('request body: ', body);
	const make = body.makeChoice;
	const model = body.modelChoice
	let query = ``
	//console.log(choice);
	const modelQuery = `SELECT * FROM car WHERE make = "${make}" AND model = "${model}"`
	const makeQuery = `SELECT * FROM car WHERE make = "${make}" `;
	if (model !== undefined) {
		query = modelQuery
	} else {
		query = makeQuery
	}

	let results: Car[] | null = await connection
		.query(query)
		.then(function ([rows, fields]) {
			//console.log(rows)
			return rows as Car[];
		});

	return new Response(JSON.stringify(results));
}
