/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/mysql';
import type { Car } from '$lib/server/GetCars';

export async function POST(event: any) {
	const body = await event.request.json();
	const min = body.min;
	const max = body.max;
	const types = body.types;
	const fuels = body.fuels;
	const gears = body.gears;

	// Initialize the base query
	let query: string;
	let queryParams: (string | number | null)[] = [];

	// Check if min and max are provided
	if (min !== undefined && max !== undefined) {
		query = `SELECT * FROM car WHERE price BETWEEN ? AND ?`;
		queryParams = [min, max];
	} else {
		query = `SELECT * FROM car `;
	}

	// Check if types are provided
	if (types && types.length > 0) {
		const typesList = types.map((type: string) => `'${type}'`).join(', ');
		query += ` WHERE type IN (${typesList})`;
	}

	// Check if fuels are provided
	if (fuels && fuels.length > 0) {
		const fuelsList = fuels.map((fuel: string) => `'${fuel}'`).join(', ');
		query += ` WHERE fuel_type IN (${fuelsList})`;
	}

	// Check if gears are provided
	if (gears && gears.length > 0) {
		const gearsList = gears.map((gear: string) => `'${gear}'`).join(', ');
		query += ` WHERE gearbox IN (${gearsList})`;
	}

	let results: Car[] | null = await connection.query(query, queryParams).then(function ([
		rows,
		fields
	]) {
		return rows as Car[];
	});

	return new Response(JSON.stringify(results));
}
