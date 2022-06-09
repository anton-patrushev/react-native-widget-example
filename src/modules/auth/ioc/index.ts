import { DIModule } from 'modules/shared/ioc/types/modules';

import { AuthModuleSymbols } from './symbols';
import { ILoginUseCase } from '../domain/useCases/LoginUseCase/ILoginUseCase';
import { LoginUseCase } from '../domain/useCases/LoginUseCase/LoginUseCase';

export const AuthModule: DIModule = {
  init: (container) => {
    container
      .bind<ILoginUseCase>(AuthModuleSymbols.LOGIN_USE_CASE)
      .to(LoginUseCase)
      .inTransientScope();
  },
};
