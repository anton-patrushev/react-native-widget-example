import { ICreateEventUseCase } from './ICreateEventUseCase';
import { CreateEventUseCaseInput } from './types/CreateEventUseCaseInput';
import { CreateEventUseCaseResult } from './types/CreateEventUseCaseResult';
import { injectable } from 'inversify';

@injectable()
export class CreateEventUseCase implements ICreateEventUseCase {
  execute = async (
    input: CreateEventUseCaseInput,
  ): CreateEventUseCaseResult => {
    if (!input.title) {
      throw new Error('Title is required');
    }

    return new Promise((res) => setTimeout(res, 3000));
  };
}
