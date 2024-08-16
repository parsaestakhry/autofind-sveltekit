/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/postgres';
import type { Car } from '$lib/server/GetCars';
export async function POST(event: any) {
	const body = await event.request.json();
	//console.log('request body: ', body);
	const make = body.makeChoice;
	const model = body.modelChoice;
	const year = body.yearChoice;
	const queryParams: (string | number)[] = [];

	let query = ``;
	//console.log(choice);
	if (model !== undefined) {
		if (year !== undefined) {
			query = `SELECT * FROM car WHERE make = $1 AND model = $2 AND year_make = $3`;
			queryParams.push(make, model, year);
		} else {
			query = `SELECT * FROM car WHERE make = $1 AND model = $2`;
			queryParams.push(make, model);
		}
	} else {
		query = `SELECT * FROM car WHERE make = $1`;
		queryParams.push(make);
	}

	// Execute the query
	let results: Car[] | null = await connection.query(query, queryParams).then((result) => {
		return result.rows as Car[];
	});

	return new Response(JSON.stringify(results));
}
