import { connection } from '$lib/db/postgres';

export const RegisterUser = async (
	email: string,
	username: string,
	firstname: string,
	lastname: string,
	hash: string
) => {
	let results = await connection
		.query(
			` INSERT INTO "user" (first_name, last_name, username, password, email) 
              VALUES ('${firstname}', '${lastname}', '${username}', '${hash}', '${email}');`
		)
		.then(function (rows) {
			return rows;
		});

	return {
		body: results
	};
};
