import { tableSchema } from '@nozbe/watermelondb';

export const EVENTS_TABLE_NAME = 'events';

export const EVENTS_TABLE_TITLE_FIELD = 'title';
export const EVENTS_TABLE_DESCRIPTION_FIELD = 'description';
export const EVENTS_TABLE_COLOR_FIELD = 'color';
export const EVENTS_TABLE_START_TIME_FIELD = 'start_time';
export const EVENTS_TABLE_END_TIME_FIELD = 'end_time';

export const EventsSchema = tableSchema({
  name: EVENTS_TABLE_NAME,
  columns: [
    { name: EVENTS_TABLE_TITLE_FIELD, type: 'string' },
    { name: EVENTS_TABLE_DESCRIPTION_FIELD, type: 'string', isOptional: true },
    { name: EVENTS_TABLE_COLOR_FIELD, type: 'string' },
    { name: EVENTS_TABLE_START_TIME_FIELD, type: 'number' },
    { name: EVENTS_TABLE_END_TIME_FIELD, type: 'number' },
  ],
});
