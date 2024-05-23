import { connection } from '$lib/db/mysql';
export type Car = {
	type: string;
	Color: string;
	fuel_type: string;
	id: number;
	model: string;
	make: string;
	milage: number;
	year_make: number;
	date_added: Date;
	engine_model: string;
	gearbox: string;
};
export const GetCars = async () => {
	let results: Car[] = await connection.query('SELECT * FROM car LIMIT 10').then(function ([rows, fields]) {
        //console.log(rows)
		return rows as Car[];
	});

	return {
		results
	};
};
