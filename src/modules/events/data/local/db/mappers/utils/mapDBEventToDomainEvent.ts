import { Event as DBEvent } from 'modules/events/data/local/db/models/Event';
import { Event as DomainEvent } from 'modules/events/domain/models/Event';

export function mapDBEventToDomainEvent(source: DBEvent): DomainEvent {
  return new DomainEvent(
    source.id,
    source.title,
    source.description,
    source.color,
    source.startTime,
    source.endTime,
  );
}
