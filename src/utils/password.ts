import bycrpt from 'bcrypt'
export function saltAndHashPassword(password : string) {
	const saltRounds = 10;
	const myPlaintextPassword = password
	bycrpt.hash(myPlaintextPassword, saltRounds, function (err : any, hash : string) {
		return hash
	});
}
