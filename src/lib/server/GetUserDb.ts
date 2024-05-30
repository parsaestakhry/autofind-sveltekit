import { connection } from '$lib/db/mysql';
import { checkPassword } from '../../utils/CheckPassword';

export async function getUserFromDb(username: string) {
	let results = await connection
		.query(`SELECT * FROM user WHERE username = "${username}"`)
		.then(function ([rows, fields]) {
			return rows;
		});

	return {
		body: results
	};
}
