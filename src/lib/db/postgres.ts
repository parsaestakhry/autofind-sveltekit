import pg from 'pg';
const { Client } = pg;
export const connection = new Client({
	user: 'default',
	password: 'I0e8MbAqhtQH',
	host: 'ep-late-scene-a4jiq0fh-pooler.us-east-1.aws.neon.tech',
	database: 'verceldb',
	ssl:true
});
await connection.connect();
