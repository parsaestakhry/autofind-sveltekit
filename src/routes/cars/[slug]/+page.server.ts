import { connection } from '$lib/db/mysql.js';
import type { Car } from '$lib/server/GetCars.js';
export const load = async ({ params }) => {
	//console.log(params.slug)

	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let newParam = capitalizeFirstLetter(params.slug);

	let results = await connection
		.query(`SELECT * FROM car WHERE registration = "${newParam}"`)
		.then(function ([rows, fields]) {
			return rows as Car[];
		});
	return {
		slug: params.slug,
		cars: results
	};
};
