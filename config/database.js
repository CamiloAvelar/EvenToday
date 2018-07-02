const { Pool } = require('pg');
const url = require('url');

if(process.env.NODE_ENV === 'production') {
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
  } else {
  module.exports = new Pool({
    host: '127.0.0.1',
    port: '5432',
    database: 'eventoday',
    user: 'postgres',
    password: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });
  }