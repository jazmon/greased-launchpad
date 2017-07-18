import { BaseModel, Maybe } from 'types';
import { User } from '~/modules/users/type';

export interface Post extends BaseModel {
  content: Maybe<string>;
  user_id: Maybe<string>;
}

export interface PostWithUser extends Post {
  user: Maybe<User>;
}
