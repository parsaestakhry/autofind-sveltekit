import { GetCars } from '$lib/server/GetCars';
import { GetUsers } from '$lib/server/GetUsers';
import type { PageServerLoad } from './$types';

export type Car = {
	type : string,
	Color : string,
	fuel_type : string,
	id : number,
	model : string,
	make : string,
	milage : number,
	make_date : Date,
	date_added : Date,
	engine_model : string,
	gearbox : string

}

export const load: PageServerLoad = async () => {
    const cars = await GetCars();
	try {
		// Return the fetched cars data as a property to be used in the component
		return {
			props: {
				data:cars
			}
		};
	} catch (error) {
		console.error('Error loading data:', error);
		// If an error occurs, return an empty object or handle the error as needed
		return {};
	}
};
