import { DIModule } from 'modules/shared/ioc/types/modules';

import { ICreateEventUseCase } from 'modules/events/domain/useCases/CreateEventUseCase/ICreateEventUseCase';
import { CreateEventUseCase } from 'modules/events/domain/useCases/CreateEventUseCase/CreateEventUseCase';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { EventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/EventsRepository';
import { IObserveAllEventsUseCase } from 'modules/events/domain/useCases/ObserveAllEventsUseCase/IObserveAllEventsUseCase';
import { ObserveAllEventsUseCase } from 'modules/events/domain/useCases/ObserveAllEventsUseCase/ObserveAllEventsUseCase';

export const EventsModule: DIModule = {
  init: (container): void => {
    container
      .bind<IEventsRepository>(EventsModuleSymbols.EVENTS_REPOSITORY)
      .to(EventsRepository)
      .inTransientScope();
    container
      .bind<ICreateEventUseCase>(EventsModuleSymbols.CREATE_EVENT_USE_CASE)
      .to(CreateEventUseCase)
      .inTransientScope();
    container
      .bind<IObserveAllEventsUseCase>(
        EventsModuleSymbols.OBSERVE_ALL_EVENTS_USE_CASE,
      )
      .to(ObserveAllEventsUseCase)
      .inTransientScope();
  },
};
