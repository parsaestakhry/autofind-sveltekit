import { connection } from '$lib/db/postgres';
export type Car = {
	type: string;
	color: string;
	fuel_type: string;
	id: number;
	model: string;
	make: string;
	mileage: number;
	year_make: number;
	date_added: Date;
	engine_model: string;
	gearbox: string;
	price: number;
	registration: string;
	description: string;
	usage: string;
};
export const GetCars = async (): Promise<{ results: Car[] }> => {
	let results: Car[] = await connection
		.query('SELECT * FROM "car" LIMIT 10') // Ensure table name is correctly quoted
		.then((result) => {
			return result.rows as Car[]; // Access the rows array directly
		});

	return {
		results
	};
};
