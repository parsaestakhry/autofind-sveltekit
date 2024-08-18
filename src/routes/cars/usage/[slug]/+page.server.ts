import { connection } from '$lib/db/postgres.js';
import type { Car } from '$lib/server/GetCars.js';
export const load = async ({ params }) => {
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let newParam = capitalizeFirstLetter(params.slug);
	let results = await connection
		.query(`SELECT * FROM car WHERE status = "${newParam}"`)
		.then(function (rows) {
			return rows as unknown as Car[];
		});
	//console.log(results)
	return {
		slug: params.slug,
		cars: results
	};
};
