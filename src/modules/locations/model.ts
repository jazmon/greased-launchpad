import { default as knex } from 'db';
import { BaseModel, Maybe } from 'types';
import { Location } from './type';

export class Locations {
  async getAll(): Promise<Location[]> {
    return knex('locations');
  }
  async getById(id: string): Promise<Maybe<Location>> {
    const query = knex('locations').where({ id });
    return query.then(([row]) => row);
  }
}
