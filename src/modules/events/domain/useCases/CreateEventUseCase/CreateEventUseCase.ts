import { ICreateEventUseCase } from './ICreateEventUseCase';
import { CreateEventUseCaseInput } from './types/CreateEventUseCaseInput';
import { CreateEventUseCaseResult } from './types/CreateEventUseCaseResult';

export class CreateEventUseCase implements ICreateEventUseCase {
  execute = async (
    input: CreateEventUseCaseInput,
  ): CreateEventUseCaseResult => {
    console.log('CREATE EVENT INPUT', input);
  };
}
