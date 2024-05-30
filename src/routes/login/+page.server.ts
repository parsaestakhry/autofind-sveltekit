import { getUserFromDb } from '$lib/server/GetUserDb';
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
		console.log(pwHash);
	}
};
