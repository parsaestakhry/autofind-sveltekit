import { connection } from '$lib/db/mysql';

export const GetCars = async () => {
	let results = await connection.query('SELECT * FROM car').then(function ([rows, fields]) {
        //console.log(rows)
		return rows;
	});

	return {
		results
	};
};
