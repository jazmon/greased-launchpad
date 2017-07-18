import { property } from 'lodash';
import { Context, UserConnection } from '~/middleware/graphql';

export const schemaFragment = `
  type Message {
    # The SQL ID of this entry
    id: Int!
    createdAt: String!
    updatedAt: String!
    content: String
    user: User
  }
`;

export const resolver = {
  Message: {
    createdAt: property('created_at'),
    updatedAt: property('updated_at'),
    user({ user_id }: UserConnection, _: any, context: Context) {
      return context.Users.getUserById(user_id);
    },
  },
};
