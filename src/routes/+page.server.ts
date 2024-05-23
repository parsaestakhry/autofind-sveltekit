import { GetCars } from '$lib/server/GetCars';
import { GetUsers } from '$lib/server/GetUsers';
import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
    
	try {
		// Return the fetched cars data as a property to be used in the component
		const cars = await GetCars();
		const carArray = cars.results;
		return {
			props: {
				data:carArray
			}
		};
	} catch (error) {
		console.error('Error loading data:', error);
		// If an error occurs, return an empty object or handle the error as needed
		return {};
	}
};
