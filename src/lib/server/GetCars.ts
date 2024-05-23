import { connection } from '$lib/db/mysql';
export type Car = {
	type: string;
	Color: string;
	fuel_type: string;
	id: number;
	model: string;
	make: string;
	milage: number;
	make_date: Date;
	date_added: Date;
	engine_model: string;
	gearbox: string;
};
export const GetCars = async () => {
	let results: Car[] = await connection.query('SELECT * FROM car LIMIT 5').then(function ([rows, fields]) {
        //console.log(rows)
		return rows as Car[];
	});

	return {
		results
	};
};
