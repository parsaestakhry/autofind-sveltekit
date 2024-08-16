import { connection } from '$lib/db/postgres.js';
import type { Car } from '$lib/server/GetCars.js';

export const load = async ({ params }: { params: { slug: string } }) => {
	// Capitalize the first letter of the slug
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let newParam = capitalizeFirstLetter(params.slug);

	// Use parameterized query to prevent SQL injection
	let queryResult = await connection.query(
		`SELECT * FROM car WHERE type = $1`,
		[newParam] // Pass the parameter value as an array
	);

	// Access rows from the query result
	let results: Car[] = queryResult.rows as Car[];

	return {
		slug: params.slug,
		cars: results
	};
};
