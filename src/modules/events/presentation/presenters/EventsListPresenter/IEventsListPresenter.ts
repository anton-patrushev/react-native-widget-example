import { Observable } from 'rxjs';

import { Event } from 'modules/events/presentation/models/Event';

export interface IEventsListPresenter {
  observeEvents(): Observable<Array<Event>>;
}
