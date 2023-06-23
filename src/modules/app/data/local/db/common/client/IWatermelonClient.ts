import { Database } from '@nozbe/watermelondb';

export interface IWatermelonClient {
  db: Database;

  /**
   * Private method to implement
   */
  // initialize(): void;
}
