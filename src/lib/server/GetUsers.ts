import { connection } from '$lib/db/postgres';

export const GetUsers = async (): Promise<{ body: any[] }> => {
	let results = await connection
		.query('SELECT * FROM "user"') // Ensure the table name is correctly quoted if necessary
		.then((result) => {
			return result.rows; // Access the rows array directly
		});

	return {
		body: results
	};
};
