/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/mysql';
import { json } from 'stream/consumers';
import type { Car } from '$lib/server/GetCars';
export async function POST(event: any) {
	const body = await event.request.json();
    const min = body.min
    const max = body.max

    let results: Car[] | null = await connection
			.query(`SELECT * FROM car WHERE price BETWEEN ${min} AND ${max} `)
			.then(function ([rows, fields]) {
				//console.log(rows)
				return rows as Car[];
			});

    return new Response(JSON.stringify(results))
}
