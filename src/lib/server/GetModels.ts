import { connection } from '$lib/db/postgres';
import type { Car } from './GetCars';

export const GetModels = async (make: string): Promise<{ results: Car[] }> => {
	let results: Car[] = await connection
		.query(`SELECT * FROM "car" WHERE "make" = $1`, [make]) // Use parameterized query with $1
		.then((result) => {
			return result.rows as Car[]; // Access the rows array directly
		});

	return {
		results
	};
};
