import { property } from 'lodash';

export const schemaFragment = `
  type Location {
    # The SQL ID of this entry
    id: Int!
    createdAt: String!
    updatedAt: String!
    latitude: Float!
    longitude: Float!
    title: String
    description: String
  }
`;

export const resolver = {
  Location: {
    createdAt: property('created_at'),
    updatedAt: property('updated_at'),
  },
};
