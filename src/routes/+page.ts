import { connection } from '$lib/db/mysql';

export async function load() {
	let results = await connection.query('SELECT * FROM user').then(function ([rows, fields]) {
		// console.log(rows);
		return rows;
	});

	return {
		body: results
	};
}
