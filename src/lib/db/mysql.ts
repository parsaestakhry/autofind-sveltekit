import mysql from 'mysql2/promise'

export const connection = await mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'autofind',
    password : 'familyguyis@fox91'
});
