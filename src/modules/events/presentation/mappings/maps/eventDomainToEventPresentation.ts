import { Mapper } from '@wufe/mapper';

import { Event as EventPresentation } from 'modules/events/presentation/models/Event';
import { Event as EventDomain } from 'modules/events/domain/models/Event';
import { PresentationMappingSignatures } from 'modules/events/presentation/mappings/signatures';
import { stringToColor } from 'modules/shared/presentation/colors/stringToColor';

export function eventDomainToEventPresentation(mapper: Mapper) {
  mapper
    .createMap<EventDomain, EventPresentation>(
      PresentationMappingSignatures.EVENT_DOMAIN_TO_EVENT_PRESENTATION,
      EventPresentation,
    )
    .forMember('color', (opt) => opt.mapFrom((src) => stringToColor(src.color)))
    .forMember('description', (opt) =>
      opt.mapFrom((src) => src.description || ''),
    )
    .forMember('startTime', (opt) =>
      opt.mapFrom((src) => new Date(src.startTimestamp)),
    )
    .forMember('endTime', (opt) =>
      opt.mapFrom((src) => new Date(src.endTimestamp)),
    );
}
