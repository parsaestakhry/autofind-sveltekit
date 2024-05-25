import bcrypt from 'bcrypt';

export function saltAndHashPassword(password: string): Promise<string> {
	const saltRounds = 10;
	const myPlaintextPassword = password;

	return new Promise((resolve, reject) => {
		bcrypt.hash(myPlaintextPassword, saltRounds, function (err: any, hash: string) {
			if (err) {
				reject(err);
			} else {
				resolve(hash);
			}
		});
	});
}
