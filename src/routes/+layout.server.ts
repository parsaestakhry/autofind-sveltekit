import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '$env/static/private';

interface TokenPayload {
	username: string;
	// Add other properties if your token payload includes more
}

export async function load({ cookies }) {
	const token: string | undefined = await new Promise<string | undefined>((resolve) => {
		const cookie = cookies.get('access_token');
		if (cookie !== undefined) {
			resolve(cookie);
		} else {
			resolve(undefined); // Explicitly resolve to undefined if there is no token
		}
	});

	if (token) {
		try {
			const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as TokenPayload;
			const username: string = decoded.username;
			return {
				username: username
			};
		} catch (error) {
			console.error('Invalid token:', error);
			return {
				username: null // Return null username if the token is invalid
			};
		}
	}

	return {
		username: '' // Return null username if there is no token
	};
}
