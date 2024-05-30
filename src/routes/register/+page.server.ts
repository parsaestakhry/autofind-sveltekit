import { RegisterUser } from '$lib/server/RegisterUser';
import { saltAndHashPassword } from '../../utils/GenPassword';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		// TODO log the user in
		const body = await event.request.formData();
		const infoArray = [...body];
		const email = infoArray[0][1].toString();
		const username = infoArray[1][1].toString();
		const firstname = infoArray[2][1].toString();
		const lastname = infoArray[3][1].toString();
		let password = infoArray[4][1];
		password = password.toString();
		const hash = await saltAndHashPassword(password);
		await RegisterUser(email, username, firstname, lastname, hash);
	}
} satisfies Actions;
