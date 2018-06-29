const { Pool } = require('pg')

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