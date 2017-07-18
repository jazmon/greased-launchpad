import * as express from 'express';
import { User } from '~/modules/users';
export type Maybe<T> = T | null;
export type Readonly<T> = { readonly [P in keyof T]: T[P] };
export type Partial<T> = { [P in keyof T]?: T[P] };
export type Nullable<T> = { [P in keyof T]: T[P] | null };

// export interface User {
//   userId: string;
//   name: string;
//   picture: string;
//   nickname: string;
//   email: string;
// }

export interface MyRequest extends express.Request {
  user: Maybe<User>;
}

export class HttpError extends Error {
  status: number;
}

export interface BaseModel {
  id: string;
  created_at: string;
  updated_at: string;
}
