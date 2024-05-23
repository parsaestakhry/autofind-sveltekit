import { connection } from '$lib/db/mysql';

export const GetUsers = async () => {
	let results = await connection.query('SELECT * FROM user').then(function ([rows, fields]) {
		return rows;
	});

	return {
		body: results
	};
}
