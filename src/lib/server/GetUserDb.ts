import { connection } from '$lib/db/postgres'; // Assuming you're using a postgres library
import { checkPassword } from '../../utils/CheckPassword';

export async function getUserFromDb(username: string) {
	let results = await connection
		.query(`SELECT * FROM "user" WHERE "username" = $1`, [username]) // Use parameterized query
		.then(function (rows) {
			return rows;
		});
	//console.log(results.rows);

	return {
		body: results.rows // Access the rows directly
	};
}
