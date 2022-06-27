import { CreateEventInput } from 'modules/events/data/local/db/repositories/EventsRepository/inputs/CreateEventInput';

export interface IEventsRepository {
  createEvent(input: CreateEventInput): Promise<void>;
}
