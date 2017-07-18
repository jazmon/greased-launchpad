import { BaseModel, Maybe } from '~/types';

export interface User extends BaseModel {
  user_id: Maybe<string>;
  name: Maybe<string>;
  email: Maybe<string>;
  nickname: Maybe<string>;
  picture: Maybe<string>;
}
