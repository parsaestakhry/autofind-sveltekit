import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '$env/static/private';
interface TokenPayload {
	username: string;
	// Add other properties if your token payload includes more
}
export async function load({ cookies }) {
	const token: any = await new Promise((resolve, reject) => {
		if (cookies.get('access_token') !== undefined) {
			resolve(cookies.get('access_token'));
		}
	});

	//console.log(ACCESS_TOKEN_SECRET)

	if (token) {
		try {
			const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
			const username: string = decoded.username;
			return {
				username: username
			};
		} catch (error) {
			console.error('Invalid token:', error);
		}
	}
}
