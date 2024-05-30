import bcrypt from 'bcryptjs';

export function checkPassword(password: string, pwHash: string): Promise<boolean> {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, pwHash, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		});
	});
}
