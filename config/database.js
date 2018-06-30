const { Client } = require('pg')

// module.exports = new Pool({
//   host: '127.0.0.1',
//   port: '5432',
//   database: 'eventoday',
//   user: 'postgres',
//   password: 'postgres',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

module.exports = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});