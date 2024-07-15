import type { Car } from '$lib/server/GetCars.js';
import { connection } from '$lib/db/mysql.js';

export const load = async ({params}) => {
    const make = params.slug

    let results: Car[] = await connection
			.query(`SELECT * FROM car WHERE make LIKE  "${make}%"`)
			.then(function ([rows, fields]) {
				//console.log(rows)
				return rows as Car[];
			});

		return {
			results,
            make
		};
    
}