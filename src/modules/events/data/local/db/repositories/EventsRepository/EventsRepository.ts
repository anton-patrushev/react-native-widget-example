import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { inject, injectable } from 'inversify';
import { CreateEventInput } from 'modules/events/data/local/db/repositories/EventsRepository/inputs/CreateEventInput';
import { IWatermelonClient } from 'modules/app/data/local/db/common/client/IWatermelonClient';
import { AppModuleSymbols } from 'modules/app/ioc/symbols';
import { EVENTS_TABLE_NAME } from 'modules/events/data/local/db/schemas/EventsSchema';
import { Event } from 'modules/events/data/local/db/models/Event';
import { Event as EventDomain } from 'modules/events/domain/models/Event';
import { map, Observable } from 'rxjs';
import { SharedModuleSymbols } from 'modules/shared/ioc/symbols';
import { IMapper } from 'modules/shared/common/mappings/IMapper';
import { LocalDataMappingSignatures } from 'modules/events/data/local/db/mappings/signatures';

@injectable()
export class EventsRepository implements IEventsRepository {
  @inject(AppModuleSymbols.WATERMELON_CLIENT)
  private watermelonClient!: IWatermelonClient;

  @inject(SharedModuleSymbols.DATA_MAPPER)
  private dataMapper!: IMapper;

  createEvent = async (input: CreateEventInput): Promise<void> => {
    const eventsTable =
      this.watermelonClient.db.collections.get<Event>(EVENTS_TABLE_NAME);

    await this.watermelonClient.db.write(async () => {
      await eventsTable.create((event) => {
        event.title = input.title;
        event.description = input.description;
        event.color = input.color;
        event.startTime = input.startTimestamp;
        event.endTime = input.endTimestamp;
      });
    });
  };

  observeEvents = (): Observable<Array<EventDomain>> => {
    const eventsTable =
      this.watermelonClient.db.collections.get<Event>(EVENTS_TABLE_NAME);

    return eventsTable
      .query()
      .observe()
      .pipe(
        map((events) =>
          this.dataMapper.mapper.map<Event[], EventDomain[]>(
            LocalDataMappingSignatures.EVENT_LOCAL_DATA_TO_EVENT_DOMAIN,
            events,
          ),
        ),
      );
  };

  // observerEvents = () => {
  //   const eventsTable =
  //     this.watermelonClient.db.collections.get<Event>(EVENTS_TABLE_NAME);
  //
  //   eventsTable.query().observe();
  // };
}
