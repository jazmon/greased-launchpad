import { property } from 'lodash';

export const schemaFragment = `
  type User {
    # The ID of this entry from Auth0
    userId: String!
    createdAt: String!
    updatedAt: String!
    name: String
    email: String
    picture: String
    nickname: String
  }
`;

export const resolver = {
  User: {
    createdAt: property('created_at'),
    updatedAt: property('updated_at'),
    userId: property('user_id'),
  },
};
