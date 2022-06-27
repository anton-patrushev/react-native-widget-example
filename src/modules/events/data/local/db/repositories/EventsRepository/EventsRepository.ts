import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { inject, injectable } from 'inversify';
import { CreateEventInput } from 'modules/events/data/local/db/repositories/EventsRepository/inputs/CreateEventInput';
import { IWatermelonClient } from 'modules/app/data/local/db/common/client/IWatermelonClient';
import { AppModuleSymbols } from 'modules/app/ioc/symbols';
import { EVENTS_TABLE_NAME } from 'modules/events/data/local/db/schemas/EventsSchema';
import { Event } from 'modules/events/data/local/db/models/Event';

@injectable()
export class EventsRepository implements IEventsRepository {
  @inject(AppModuleSymbols.WATERMELON_CLIENT)
  private watermelonClient!: IWatermelonClient;

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
}
