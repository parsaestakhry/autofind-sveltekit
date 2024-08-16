/** @type {import('./$types').RequestHandler} */
import { connection } from '$lib/db/postgres';
import type { Car } from '$lib/server/GetCars';

export async function POST(event: any) {
	const body = await event.request.json();
	const min = body.min;
	const max = body.max;
	const types = body.types;
	const fuels = body.fuels;
	const gears = body.gears;

	// Initialize the base query
	let query = `SELECT * FROM car`;
	let queryParams: (string | number | null)[] = [];

	// Handle price range if both min and max are defined
	if (min !== undefined && max !== undefined) {
		query += ` WHERE price BETWEEN $1 AND $2`;
		queryParams.push(min, max);
	}

	// Check if types are provided
	if (types && types.length > 0) {
		const typesList = types.map((_: any, i: any) => `$${queryParams.length + i + 1}`).join(', ');
		query += queryParams.length === 0 ? ` WHERE` : ` AND`;
		query += ` type IN (${typesList})`;
		queryParams.push(...types);
	}

	// Check if fuels are provided
	if (fuels && fuels.length > 0) {
		const fuelsList = fuels.map((_: any, i: any) => `$${queryParams.length + i + 1}`).join(', ');
		query += queryParams.length === 0 ? ` WHERE` : ` AND`;
		query += ` fuel_type IN (${fuelsList})`;
		queryParams.push(...fuels);
	}

	// Check if gears are provided
	if (gears && gears.length > 0) {
		const gearsList = gears.map((_: any, i: any) => `$${queryParams.length + i + 1}`).join(', ');
		query += queryParams.length === 0 ? ` WHERE` : ` AND`;
		query += ` gearbox IN (${gearsList})`;
		queryParams.push(...gears);
	}

	let results: Car[] | null = await connection.query(query, queryParams).then(function (result) {
		return result.rows as Car[];
	});

	return new Response(JSON.stringify(results));
}
