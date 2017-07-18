import { property } from 'lodash';
import { Context, UserConnection } from '~/middleware/graphql';

export const schemaFragment = `
  type Post {
    # The SQL ID of this entry
    id: Int!
    createdAt: String!
    updatedAt: String!
    content: String
    user: User
    # comments(limit: Int, offset: Int): [Comment]!
  }
`;

export const resolver = {
  Post: {
    createdAt: property('created_at'),
    updatedAt: property('updated_at'),
    user({ user_id }: UserConnection, _: any, context: Context) {
      return context.Users.getUserById(user_id);
    },
  },
};
