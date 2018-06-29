const { Pool } = require('pg')

module.exports = new Pool({
  host: '127.0.0.1',
  port: '5432',
  database: 'BD1',
  user: 'camilo',
  password: '123456',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});