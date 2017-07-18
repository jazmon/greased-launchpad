import * as knexfile from '../knexfile';
import * as Knex from 'knex';
type envs = 'development';
const env: envs = <envs>process.env.NODE_ENV;
console.log('NODE_ENV: ', env);

// const knexf: { [E in envs]: Knex.Config } = knexfile;

const knex = Knex(<Knex.Config>knexfile[env]);

export default knex;

knex.migrate.latest();
