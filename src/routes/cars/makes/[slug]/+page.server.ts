import { connection } from '$lib/db/mysql.js';
import type { Car } from '$lib/server/GetCars.js';
export const load = async ({ params }) => {
	let results = await connection
		.query(`SELECT * FROM car WHERE make = "${params.slug}"`)
		.then(function ([rows, fields]) {
			return rows as Car[];
		});
    //console.log(results)
	return {
		slug: params.slug,
		cars: results
	};
};
