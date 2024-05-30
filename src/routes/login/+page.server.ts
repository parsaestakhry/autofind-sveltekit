import { getUserFromDb } from '$lib/server/GetUserDb';
import { checkPassword } from '../../utils/CheckPassword';
import { saltAndHashPassword } from '../../utils/GenPassword';
import type { PageServerLoad } from './$types';

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();
		const infoArray = [...body];
		const username = infoArray[0][1].toString();
		const password = infoArray[1][1].toString();
		const pwHash = await saltAndHashPassword(password);
		const result = await getUserFromDb(username, pwHash);
		const compareResult = await checkPassword(password, pwHash)
		
	}	
};
