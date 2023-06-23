import { inject, injectable } from 'inversify';
import { Observable } from 'rxjs';

import { IObserveAllEventsUseCase } from 'modules/events/domain/useCases/ObserveAllEventsUseCase/IObserveAllEventsUseCase';
import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { Event } from 'modules/events/domain/models/Event';

@injectable()
export class ObserveAllEventsUseCase implements IObserveAllEventsUseCase {
  @inject(EventsModuleSymbols.EVENTS_REPOSITORY)
  private eventsRepository!: IEventsRepository;

  execute = (): Observable<Array<Event>> => {
    return this.eventsRepository.observeEvents();
  };
}
