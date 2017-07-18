import { createJsonRoute } from 'utils/endpoint';
import * as express from 'express';
import { Response } from 'express-serve-static-core';
import { Locations } from './model';

const locations = new Locations();

export const getLocations = createJsonRoute(async () => {
  const locs = await locations.getAll();
  return locs;
});
