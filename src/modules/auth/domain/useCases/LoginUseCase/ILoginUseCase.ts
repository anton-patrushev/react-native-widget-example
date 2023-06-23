import { IUseCase } from 'modules/shared/domain/useCases/types/IUseCase';

import { LoginUseCaseInput } from './types/LoginUseCaseInput';
import { LoginUseCaseResult } from './types/LoginUseCaseResult';

export interface ILoginUseCase
  extends IUseCase<LoginUseCaseInput, LoginUseCaseResult> {}
