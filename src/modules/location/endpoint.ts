import { createJsonRoute } from 'utils/endpoint';
import * as express from 'express';
import { Response } from 'express-serve-static-core';
import { Location } from './location';

const location = new Location();

export const getLocations = createJsonRoute(async () => {
  const locations = await location.getAll();
  return locations;
});
