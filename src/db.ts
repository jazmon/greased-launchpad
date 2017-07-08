import knexfile from '../knexfile';
import * as Knex from 'knex';
type envs = 'development'; // | 'production' | 'test';
const env: envs = process.env.NODE_ENV || 'development';
console.log('env', env);

const knex = Knex(knexfile[env]);

export default knex;

knex.migrate.latest([knexfile]);

export interface User {
  user_id: string | null;
  created_at: string;
  updated_at: string;
  name: string | null;
  email: string | null;
  nickname: string | null;
  picture: string | null;
}

export interface Location {
  id: string;
  created_at: string;
  updated_at: string;
  latitude: number | null;
  longitude: number | null;
  title: string | null;
  description: string | null;
}

export interface Message {
  id: string;
  created_at: string;
  updated_at: string;
  content: string | null;
  user_id: string | null;
}

export interface Post {
  id: string;
  created_at: string;
  updated_at: string;
  content: string | null;
  user_id: string | null;
}
