import { BaseModel, Maybe } from 'types';
import { User } from '~/modules/users/type';

export interface Message extends BaseModel {
  content: Maybe<string>;
  user_id: Maybe<string>;
}

export interface MessageWithUser extends Message {
  user: Maybe<User>;
}
