import { Database } from '@nozbe/watermelondb';

export interface IWatermelonClient {
  db: Database;
}
