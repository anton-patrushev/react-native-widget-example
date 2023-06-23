import { IUseCase } from 'modules/shared/domain/useCases/types/IUseCase';

export interface ISignOutUseCase extends IUseCase<void, Promise<void>> {}
