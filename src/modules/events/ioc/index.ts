import { DIModule } from 'modules/shared/ioc/types/modules';

import { ICreateEventUseCase } from 'modules/events/domain/useCases/CreateEventUseCase/ICreateEventUseCase';
import { CreateEventUseCase } from 'modules/events/domain/useCases/CreateEventUseCase/CreateEventUseCase';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { EventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/EventsRepository';

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
  },
};
