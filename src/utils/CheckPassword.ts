import bcrypt from 'bcryptjs';

export function checkPassword(password: string, pwHash: string) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, pwHash, function (err, res) {
            if (err) {
                reject(err)
            }
            else {
                resolve(true)
            }
        });
	});
}
