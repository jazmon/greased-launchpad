import { BaseModel, Maybe } from 'types';

export interface Location extends BaseModel {
  latitude: Maybe<number>;
  longitude: Maybe<number>;
  title: Maybe<string>;
  description: Maybe<string>;
}
