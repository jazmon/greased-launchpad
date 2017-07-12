import { property, constant } from 'lodash';
export const locationSchemaFragment = `
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

export const locationResolver = {
  Location: {
    createdAt: property('created_at'),
    updatedAt: property('updated_at'),
  },
};
