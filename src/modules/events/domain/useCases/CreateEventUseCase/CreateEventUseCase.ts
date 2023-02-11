import { ICreateEventUseCase } from './ICreateEventUseCase';
import { CreateEventUseCaseInput } from './types/CreateEventUseCaseInput';
import { CreateEventUseCaseResult } from './types/CreateEventUseCaseResult';
import { inject, injectable } from 'inversify';
import { IEventsRepository } from 'modules/events/data/local/db/repositories/EventsRepository/IEventsRepository';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { CreateEventInput as CreateEventDataInput } from 'modules/events/data/local/db/repositories/EventsRepository/inputs/CreateEventInput';

@injectable()
export class CreateEventUseCase implements ICreateEventUseCase {
  @inject(EventsModuleSymbols.EVENTS_REPOSITORY)
  private eventsRepository!: IEventsRepository;

  execute = async (
    input: CreateEventUseCaseInput,
  ): CreateEventUseCaseResult => {
    if (!input.title) {
      throw new Error('Title is required');
    }

    try {
      await this.eventsRepository.createEvent(
        new CreateEventDataInput(
          input.title,
          input.description,
          input.color,
          input.startTime.getTime(),
          input.endTime.getTime(),
        ),
      );
    } catch (e) {
      console.log('ERROR WHILE CREATING EVENT IN DB:', e);

      throw new Error('Something went wrong while creating event');
    }
  };
}
