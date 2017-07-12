import { default as knex } from '../../db';

export interface DbLocation {
  id: string;
  created_at: string;
  updated_at: string;
  latitude: number | null;
  longitude: number | null;
  title: string | null;
  description: string | null;
}

export interface LocationType {
  id: string;
  createdAt: string;
  updatedAt: string;
  latitude: number | null;
  longitude: number | null;
  title: string | null;
  description: string | null;
}

export class Location {
  async getAll(): Promise<Location[]> {
    return knex('locations');
  }
  async getById(id: string): Promise<LocationType | null> {
    const query = knex('locations').where({ id });
    return query.then(([row]) => row);
  }
}
