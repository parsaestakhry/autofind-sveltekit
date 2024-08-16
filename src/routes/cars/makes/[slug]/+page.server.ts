import { connection } from '$lib/db/postgres.js';
import type { Car } from '$lib/server/GetCars.js';

export const load = async ({ params }: { params: { slug: string } }) => {
	let newParam = params.slug;

	// Use parameterized query for security
	const queryResult = await connection.query(
		`SELECT * FROM car WHERE make = $1`,
		[newParam] // Pass the parameter as an array
	);

	// Access rows from the query result
	const results: Car[] = queryResult.rows as Car[];

	return {
		slug: params.slug,
		cars: results
	};
};
