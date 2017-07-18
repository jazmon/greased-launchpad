import { default as knex } from 'db';
import { User } from './type';

export interface CreateUserProps {
  userId?: string;
  name?: string;
  email?: string;
  picture?: string;
  nickname?: string;
}

export class Users {
  async getAll(): Promise<User[]> {
    return knex('users');
  }
  async getUserById(id: string): Promise<User> {
    const query = knex('users').where({ user_id: id });
    return query.then(([row]) => row);
  }
  async createUser({
    userId,
    name,
    email,
    picture,
    nickname,
  }: CreateUserProps): Promise<string> {
    return knex('users')
      .insert({ name, email, picture, nickname, user_id: userId })
      .returning('user_id');
  }
}
