import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import appSchema from 'modules/app/data/local/db/common/schemas/AppSchema';
import appSchemaMigrations from 'modules/app/data/local/db/common/migrations/AppSchemaMigrations';

export const SQLAdapter = new SQLiteAdapter({
  schema: appSchema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations: appSchemaMigrations,
  jsi: true,
  // (optional, but you should implement this method)
  onSetUpError: (e) => {
    // TODO: implement error DB setup handling
    // Database failed to load -- offer the user to reload the app or log out
    console.error('~~~ ON DB SETUP ERROR', e);
  },
});
