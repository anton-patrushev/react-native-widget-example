import { Event as DBEvent } from 'modules/events/data/local/db/models/Event';
import { Event as DomainEvent } from 'modules/events/domain/models/Event';

import { mapDBEventToDomainEvent } from './utils/mapDBEventToDomainEvent';

export interface IEventLocalDataMapper {
  mapFromDBToDomain: (source: DBEvent) => DomainEvent;
}

export const EventLocalDataMapper: IEventLocalDataMapper = {
  mapFromDBToDomain: mapDBEventToDomainEvent,
};
