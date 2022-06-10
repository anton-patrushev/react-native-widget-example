import { IUseCase } from 'modules/shared/domain/useCases/types/IUseCase';

export interface IGetIsAuthenticatedUseCase
  extends IUseCase<void, Promise<void>> {}
