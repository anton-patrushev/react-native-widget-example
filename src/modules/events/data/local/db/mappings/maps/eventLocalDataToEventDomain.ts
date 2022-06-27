import { Mapper } from '@wufe/mapper';

import { Event as EventLocalData } from 'modules/events/data/local/db/models/Event';
import { Event as EventDomain } from 'modules/events/domain/models/Event';
import { LocalDataMappingSignatures } from 'modules/events/data/local/db/mappings/signatures';

export function eventLocalDataToEventDomain(mapper: Mapper) {
  mapper
    .createMap<EventLocalData, EventDomain>(
      LocalDataMappingSignatures.EVENT_LOCAL_DATA_TO_EVENT_DOMAIN,
      EventDomain,
    )
    .forMember('startTimestamp', (opt) => opt.mapFrom((src) => src.startTime))
    .forMember('endTimestamp', (opt) => opt.mapFrom((src) => src.endTime));
}
