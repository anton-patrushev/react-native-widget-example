import { map, Observable } from 'rxjs';

import { IEventsListPresenter } from 'modules/events/presentation/presenters/EventsListPresenter/IEventsListPresenter';
import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { IObserveAllEventsUseCase } from 'modules/events/domain/useCases/ObserveAllEventsUseCase/IObserveAllEventsUseCase';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { Event } from 'modules/events/presentation/models/Event';
import { EventPresentationMapper } from 'modules/events/presentation/mappers/EventPresentationMapper';

export function useEventsListPresenter(): IEventsListPresenter {
  const observeAllEventsUseCase = useInjection<IObserveAllEventsUseCase>(
    EventsModuleSymbols.OBSERVE_ALL_EVENTS_USE_CASE,
  );

  const observeEvents = (): Observable<Array<Event>> => {
    return observeAllEventsUseCase
      .execute()
      .pipe(
        map((events) =>
          events.map(EventPresentationMapper.mapFromDomainToPresentation),
        ),
      );
  };

  return { observeEvents };
}
