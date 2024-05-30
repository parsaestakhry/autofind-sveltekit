import { getUserFromDb } from '$lib/server/GetUserDb';
import { checkPassword } from '../../utils/CheckPassword';
import { saltAndHashPassword } from '../../utils/GenPassword';
import type { PageServerLoad } from './$types';
import jwt from 'jsonwebtoken';
export const actions = {
	default: async (event: any) => {
		const body = await event.request.formData();
		const infoArray = [...body];
		const username = infoArray[0][1].toString();
		const password = infoArray[1][1].toString();
		const pwHash = await saltAndHashPassword(password);
		const result = await getUserFromDb(username);
		const userArray = result.body as { password: string }[];
		if (userArray.length > 0) {
			const userPassword = userArray[0].password;
			const compareResult = await checkPassword(password, userPassword);
			if (compareResult) {
				console.log('correct password')
			} else {
				console.log('incorrect password')
			}
			
		}
		
	}
};
