import { User } from '~/modules/users';
import { Post, PostWithUser } from './type';
import { default as knex } from '~/db';
import { Maybe } from '~/types';

export class Posts {
  async getAll(): Promise<Post[]> {
    return knex('posts');
  }
  async getAllWithUsers(): Promise<PostWithUser[]> {
    const posts = await knex
      .table('posts')
      .innerJoin('users', 'posts.user_id', 'users.user_id')
      .select(knex.raw('posts.*, row_to_json(users.*) as author'));
    return posts;
  }
  async getPostById(id: string): Promise<Post> {
    const query = knex('posts').where({ id });
    return query.then(([row]) => row);
  }
}
