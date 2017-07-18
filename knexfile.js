require('dotenv').config();
// Update with your config settings.
/**
 * 
 * @param {*} debugDb string | null
 * 
 * @return boolean
 */
function isDebugDb(debugDb) {
  return debugDb ? debugDb === 'true' : false;
}

const config = {
  development: {
    acquireConnectionTimeout: 1000,
    client: 'postgresql',
    connection: process.env.DB_CONNECTION,
    migrations: {
      tableName: 'knex_migrations',
    },
    debug: isDebugDb(process.env.DEBUG_DATABASE),
  },
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
};
// exports.config = config;
// exports.default = config;
// exports.development = config;
module.exports = config;
