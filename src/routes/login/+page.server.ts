import { getUserFromDb } from '$lib/server/GetUserDb';
import { checkPassword } from '../../utils/CheckPassword';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';

dotenv.config();

export const actions = {
	default: async (event: any) => {
		let show = false;
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
					const accessToken = jwt.sign(userObject, tokenSecret, { expiresIn: '30d' });
					//console.log(userObject)
					event.cookies.set('access_token', accessToken, {
						httpOnly: true, // To prevent XSS attacks
						secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
						maxAge: 30 * 24 * 60 * 60, // Token expires in 1 hour
						path: '/'
					});

					if (accessToken) {
						show = true;
					}
				} else {
					console.log('Incorrect password');
				}
			} else {
				console.log('User not found');
			}
		} catch (error) {
			console.error('Internal Server Error', error);
		}
		return {
			show: show
		};
	}
	
};
