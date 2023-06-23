import { IEventsListPresenter } from 'modules/events/presentation/presenters/EventsListPresenter/IEventsListPresenter';
import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { IObserveAllEventsUseCase } from 'modules/events/domain/useCases/ObserveAllEventsUseCase/IObserveAllEventsUseCase';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { map, Observable } from 'rxjs';
import { Event } from 'modules/events/presentation/models/Event';
import { Event as EventDomain } from 'modules/events/domain/models/Event';
import { IMapper } from 'modules/shared/common/mappings/IMapper';
import { SharedModuleSymbols } from 'modules/shared/ioc/symbols';
import { PresentationMappingSignatures } from 'modules/events/presentation/mappings/signatures';

export function useEventsListPresenter(): IEventsListPresenter {
  const observeAllEventsUseCase = useInjection<IObserveAllEventsUseCase>(
    EventsModuleSymbols.OBSERVE_ALL_EVENTS_USE_CASE,
  );

  const presentationMapper = useInjection<IMapper>(
    SharedModuleSymbols.PRESENTATION_MAPPER,
  );

  const observeEvents = (): Observable<Array<Event>> => {
    return observeAllEventsUseCase
      .execute()
      .pipe(
        map((events) =>
          presentationMapper.mapper.map<EventDomain[], Event[]>(
            PresentationMappingSignatures.EVENT_DOMAIN_TO_EVENT_PRESENTATION,
            events,
          ),
        ),
      );
  };

  return { observeEvents };
}
