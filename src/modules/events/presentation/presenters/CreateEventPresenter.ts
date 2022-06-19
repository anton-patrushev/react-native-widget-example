import { ICreateEventPresenter } from 'modules/events/presentation/presenters/ICreateEventPresenter';
import { CreateEventInput } from 'modules/events/presentation/inputs/CreateEventInput';

export function useCreateEventPresenter(): ICreateEventPresenter {
  const createEvent = async (input: CreateEventInput): Promise<void> => {
    // TODO: call useCase
    console.log('~~~ create event input ->', input);
  };

  return { createEvent };
}
