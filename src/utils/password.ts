import bcrypt from 'bcrypt'
export function saltAndHashPassword(password : string) {
	const saltRounds = 10;
	const myPlaintextPassword = password
	bcrypt.hash(myPlaintextPassword, saltRounds, function (err : any, hash : string) {
		return hash
	});
}
