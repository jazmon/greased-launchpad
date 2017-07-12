import * as Joi from 'joi';
import { Response } from 'express-serve-static-core';
import * as express from 'express';
import { Users } from '../api/sql/models';
import { createJsonRoute } from '../utils/endpoint';
import { validateRequest } from '../utils/validator';

const users = new Users();
export const getUsers = createJsonRoute(async () => {
  const usrs = await users.getAll();
  return usrs;
});

export const schema = {
  userId: Joi.string().required(),
  name: Joi.string(),
  nickname: Joi.string(),
  picture: Joi.string(),
  email: Joi.string(),
};

export const createUser = createJsonRoute(async (req: express.Request) => {
  const user = req.user;

  validateRequest(user, schema);
  return users.createUser(user);
});
