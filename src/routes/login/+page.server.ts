import { getUserFromDb } from '$lib/server/GetUserDb';
import { checkPassword } from '../../utils/CheckPassword';
import { saltAndHashPassword } from '../../utils/GenPassword';
import type { PageServerLoad } from './$types';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const actions = {
	default: async (event: any) => {
		try {
			const body = await event.request.formData();
			const username = body.get('username')?.toString();
			const password = body.get('password')?.toString();

			if (!username || !password) {
				console.log('Username or password missing');
				return;
			}

			const result = await getUserFromDb(username);
			const userArray = result.body as { password: string; username: string }[];

			if (userArray.length > 0) {
				const userPassword = userArray[0].password;
				const userName = userArray[0].username;
				const compareResult = await checkPassword(password, userPassword);

				if (compareResult) {
					console.log('Correct password');
					const tokenSecret = process.env.ACCESS_TOKEN_SECRET;

					if (!tokenSecret) {
						throw new Error('Access token secret not defined');
					}

					const userObject = { username: userName };
					const accessToken = jwt.sign(userObject, tokenSecret);
					console.log(accessToken);
				} else {
					console.log('Incorrect password');
				}
			} else {
				console.log('User not found');
			}
		} catch (error) {
			console.error('Internal Server Error', error);
		}
	}
};
