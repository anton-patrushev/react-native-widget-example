import { ICreateEventPresenter } from 'modules/events/presentation/presenters/ICreateEventPresenter';
import { CreateEventInput } from 'modules/events/presentation/inputs/CreateEventInput';
import { useInjection } from 'modules/shared/ioc/context/useInjection';
import { ICreateEventUseCase } from 'modules/events/domain/useCases/CreateEventUseCase/ICreateEventUseCase';
import { EventsModuleSymbols } from 'modules/events/ioc/symbols';
import { CreateEventUseCaseInput } from 'modules/events/domain/useCases/CreateEventUseCase/types/CreateEventUseCaseInput';

export function useCreateEventPresenter(): ICreateEventPresenter {
  const createEventUseCase = useInjection<ICreateEventUseCase>(
    EventsModuleSymbols.CREATE_EVENT_USE_CASE,
  );

  const createEvent = (input: CreateEventInput): Promise<void> => {
    return createEventUseCase.execute(
      new CreateEventUseCaseInput(
        input.title,
        input.description,
        input.color,
        input.startTime,
        input.endTime,
      ),
    );
  };

  return { createEvent };
}
