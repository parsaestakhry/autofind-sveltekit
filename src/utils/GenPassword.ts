import bcrypt from 'bcryptjs';

export function saltAndHashPassword(password: string): Promise<string> {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(password, salt, function (err, hash) {
				if (err) {
					reject(err)
				}
				else {
					resolve(hash)
				}
			});
		});
	});
}
