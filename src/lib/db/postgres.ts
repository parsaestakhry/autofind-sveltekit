import pg from 'pg';
import { POSTGRES_USER } from '$env/static/private'
import { POSTGRES_PASSWORD } from '$env/static/private';
import { POSTGRES_HOST } from '$env/static/private';
import { POSTGRES_DATABASE } from '$env/static/private';
const { Client } = pg;
export const connection = new Client({
	user: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	host: POSTGRES_HOST,
	database: POSTGRES_DATABASE,
	ssl:true
});
await connection.connect();
