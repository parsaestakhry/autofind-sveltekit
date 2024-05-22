import { connection } from '$lib/db/mysql';

export const GetUsers = async () => {
	let results = await connection.query('SELECT * FROM user').then(function ([rows, fields]) {
		console.log(rows);
		return rows;
	});

	return {
		body: results
	};
}
