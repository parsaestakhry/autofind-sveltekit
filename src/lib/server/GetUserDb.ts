import { connection } from '$lib/db/mysql';

export async function getUserFromDb(username: string, pwHash: string) {
	let results = await connection
		.query(`SELECT * FROM user WHERE username = "${username}" AND password="${pwHash}";`)
		.then(function ([rows, fields]) {
			return rows;
		});

	return {
		body: results
	};
}
