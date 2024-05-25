import { connection } from '$lib/db/mysql';

export const RegisterUser = async (
	email: string,
	username: string,
	firstname: string,
	lastname: string,
	hash: string
    
) => {
	let results = await connection
		.query(
			` insert into user (first_name, last_name, username, password, email) 
              values ("${firstname}", "${lastname}", "${username}", "${hash}", "${email}");`
		)
		.then(function ([rows, fields]) {
			return rows;
		});

	return {
		body: results
	};
};
