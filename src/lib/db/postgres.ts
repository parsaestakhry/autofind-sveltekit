import pg from 'pg';
import { POSTGRES_USER } from '$env/static/private';
import { POSTGRES_PASSWORD } from '$env/static/private';
import { POSTGRES_URL } from '$env/static/private';
import { POSTGRES_DATABASE } from '$env/static/private';
const { Pool } = pg;

export const connection = new Pool({
	connectionString: POSTGRES_URL
});
connection.connect();
