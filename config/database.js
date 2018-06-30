const { Pool } = require('pg');
const url = require('url');

const params = url.parse(process.env.DATABASE_URL);
const auth = params.auth.split(':');

module.exports = new Pool({
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  user: auth[0],
  password: auth[1],
  ssl: true,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});