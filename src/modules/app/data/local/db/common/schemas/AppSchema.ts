import { appSchema } from '@nozbe/watermelondb';
import { EventsSchema } from 'modules/events/data/local/db/schemas/EventsSchema';

export default appSchema({
  version: 1,
  tables: [EventsSchema],
});
