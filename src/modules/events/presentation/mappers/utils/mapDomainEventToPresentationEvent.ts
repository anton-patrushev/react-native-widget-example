import { Event as DomainEvent } from 'modules/events/domain/models/Event';
import { Event as PresentationEvent } from 'modules/events/presentation/models/Event';
import { stringToColor } from 'modules/shared/presentation/colors/stringToColor';

export function mapDomainEventToPresentationEvent(
  source: DomainEvent,
): PresentationEvent {
  const eventUIColor = stringToColor(source.color);

  return new PresentationEvent(
    source.id,
    source.title,
    eventUIColor,
    source.description ?? '',
    new Date(source.startTimestamp),
    new Date(source.endTimestamp),
  );
}
