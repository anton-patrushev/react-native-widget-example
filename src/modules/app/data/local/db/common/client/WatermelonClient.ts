import { injectable } from 'inversify';

import { IWatermelonClient } from 'modules/app/data/local/db/common/client/IWatermelonClient';
import { Database } from '@nozbe/watermelondb';
import { SQLAdapter } from 'modules/app/data/local/db/common/adapter/SQLAdapter';
import appModels from 'modules/app/data/local/db/common/models/AppModels';

@injectable()
export class WatermelonClient implements IWatermelonClient {
  db!: Database;

  constructor() {
    this.initialize();
  }

  private initialize = () => {
    this.db = new Database({ adapter: SQLAdapter, modelClasses: appModels });

    if (__DEV__) {
      this.debug();
    }
  };

  private debug = () => {
    const {
      connectDatabases,
      WatermelonDB,
    } = require('react-native-flipper-databases');

    connectDatabases([new WatermelonDB(this.db)]);
  };

  static shared = new WatermelonClient();
}
