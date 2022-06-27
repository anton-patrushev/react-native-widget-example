import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';
import {
  EVENTS_TABLE_COLOR_FIELD,
  EVENTS_TABLE_DESCRIPTION_FIELD,
  EVENTS_TABLE_END_TIME_FIELD,
  EVENTS_TABLE_NAME,
  EVENTS_TABLE_START_TIME_FIELD,
  EVENTS_TABLE_TITLE_FIELD,
} from 'modules/events/data/local/db/schemas/EventsSchema';

export class Event extends Model {
  static table = EVENTS_TABLE_NAME;

  @field(EVENTS_TABLE_TITLE_FIELD) title!: string;
  @field(EVENTS_TABLE_DESCRIPTION_FIELD) description!: string | null;
  @field(EVENTS_TABLE_COLOR_FIELD) color!: string;
  @field(EVENTS_TABLE_START_TIME_FIELD) startTime!: number;
  @field(EVENTS_TABLE_END_TIME_FIELD) endTime!: number;
}
