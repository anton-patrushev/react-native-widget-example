import { IUseCase } from 'modules/shared/domain/useCases/types/IUseCase';

import { CreateEventUseCaseInput } from './types/CreateEventUseCaseInput';
import { CreateEventUseCaseResult } from './types/CreateEventUseCaseResult';

export interface ICreateEventUseCase
  extends IUseCase<CreateEventUseCaseInput, CreateEventUseCaseResult> {}
