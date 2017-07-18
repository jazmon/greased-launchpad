import { default as knex } from '~/db';
import { Message, MessageWithUser } from './type';

export class Messages {
  async getAll(): Promise<Message[]> {
    return knex('messages');
  }
  async getAllWithUsers(): Promise<MessageWithUser[]> {
    const messages = await knex('messages')
      .select(knex.raw('messages.*, row_to_json(users.*) as user'))
      .innerJoin('users', 'messages.user_id', 'users.user_id');
    return messages;
  }
  async getMessageById(id: string): Promise<Message> {
    const query = knex('messages').where({ id });
    return query.then(([row]) => row);
  }

  async submitMessage({
    content,
    userId,
  }: {
    content: string;
    userId: string;
  }): Promise<string> {
    const id = await knex.transaction(trx =>
      trx('messages').insert({
        content,
        user_id: userId,
      }),
    );
    return id;
  }
}
