import { CreateEventInput } from 'modules/events/presentation/inputs/CreateEventInput';

export interface ICreateEventPresenter {
  createEvent(input: CreateEventInput): Promise<void>;
}
