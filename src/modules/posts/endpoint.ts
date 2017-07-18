import { Posts } from './model';
import { createJsonRoute } from 'utils/endpoint';
import * as express from 'express';
import { Response } from 'express-serve-static-core';

const posts = new Posts();
export const getPosts = createJsonRoute(async () => {
  const ps = await posts.getAllWithUsers();
  return ps;
});
