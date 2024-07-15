import { connection } from "$lib/db/mysql"
import type { Car } from "./GetCars";
export const GetModels = async (make : string) => {
    let results: Car[] = await connection.query(`SELECT * FROM car WHERE make = "${make}"`).then(function ([
			rows,
			fields
		]) {
			//console.log(rows)
			return rows as Car[];
		});

		return {
			results
		};
}