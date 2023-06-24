import { Event as DomainEvent } from 'modules/events/domain/models/Event';
import { Event as PresentationEvent } from 'modules/events/presentation/models/Event';

import { mapDomainEventToPresentationEvent } from './utils/mapDomainEventToPresentationEvent';

export interface IEventPresentationMapper {
  mapFromDomainToPresentation: (source: DomainEvent) => PresentationEvent;
}

export const EventPresentationMapper: IEventPresentationMapper = {
  mapFromDomainToPresentation: mapDomainEventToPresentationEvent,
};
