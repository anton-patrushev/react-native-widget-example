import { Observable } from 'rxjs';

import { CreateEventInput } from 'modules/events/data/local/db/repositories/EventsRepository/inputs/CreateEventInput';
import { Event as EventDomain } from 'modules/events/domain/models/Event';

export interface IEventsRepository {
  createEvent(input: CreateEventInput): Promise<void>;

  observeEvents(): Observable<Array<EventDomain>>;
}
