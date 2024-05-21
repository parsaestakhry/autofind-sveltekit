import mysql from 'mysql2/promise'

export const mysqlconn = await mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'familyguyis@fox91',
	database: 'autofind'
});