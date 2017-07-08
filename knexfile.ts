// Update with your config settings.
const config = {
  development: {
    acquireConnectionTimeout: 1000,
    client: 'postgresql',
    connection: {
      database: process.env.PG_DATABASE || 'greaserocket',
      host: process.env.PG_HOST || 'localhost',
      password: process.env.PG_PASSWORD || 'greaserocket',
      user: process.env.PG_USER || 'greaserocket',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    // debug: true,
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

export default config;
