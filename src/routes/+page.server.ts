import { GetCars } from '$lib/server/GetCars';
import { GetUsers } from '$lib/server/GetUsers';

(async () => {
	try {
		let carInfo = await GetCars();
		console.log(carInfo);
	} catch (error) {
		console.error('Error fetching car data:', error);
	}
})();


