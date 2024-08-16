import { connection } from '$lib/db/postgres.js';
import type { Car } from '$lib/server/GetCars.js';

export const load = async ({ params }: { params: { slug: string } }) => {
	// Capitalize the first letter of the slug
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let newParam = capitalizeFirstLetter(params.slug);

	// Use parameterized query for security
	const queryResult = await connection.query(`SELECT * FROM car WHERE registration = $1`, [
		newParam
	]);

	// Extract rows from the result
	const results: Car[] = queryResult.rows as Car[];
	
	return {
		slug: params.slug,
		cars: results
	};
};
