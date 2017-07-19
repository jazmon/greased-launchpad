import { userResolver, userSchemaFragment } from '~/modules/users';
import { messageResolver, messageSchemaFragment } from '~/modules/messages';
import { postResolver, postSchemaFragment } from '~/modules/posts';
import { locationResolver, locationSchemaFragment } from '~/modules/locations';
// ## GENERATOR SCHEMA IMPORTS

export const schema = [
  `
  ${locationSchemaFragment}
  ${messageSchemaFragment}
  ${postSchemaFragment}
  ${userSchemaFragment}
  ## GENERATOR SCHEMA FRAGMENTS
`,
];

export const resolvers = Object.assign(
  {},
  userResolver,
  locationResolver,
  messageResolver,
  postResolver,
  // ## GENERATOR SCHEMA RESOLVERS
);
