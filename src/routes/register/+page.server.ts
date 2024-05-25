import { RegisterUser } from '$lib/server/RegisterUser';
import { saltAndHashPassword } from '../../utils/password';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		// TODO log the user in
		const body = await event.request.formData();
		const infoArray = [...body];
		const email = infoArray[0][1];
		const username = infoArray[1][1];
		const firstname = infoArray[2][1];
		const lastname = infoArray[3][1];
		let password = infoArray[4][1];
		password = password.toString();
		const hash = await saltAndHashPassword(password);
		

		
	}
} satisfies Actions;
