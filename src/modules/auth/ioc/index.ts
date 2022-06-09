import { DIModule } from 'modules/shared/ioc/types/modules';

import { ILoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/ILoginUseCase';
import { LoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/LoginUseCase';
import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';
import { AuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/AuthenticationRepository';

import { AuthModuleSymbols } from './symbols';

export const AuthModule: DIModule = {
  init: (container) => {
    container
      .bind<ILoginUseCase>(AuthModuleSymbols.LOGIN_USE_CASE)
      .to(LoginUseCase)
      .inTransientScope();
    container
      .bind<IAuthenticationRepository>(
        AuthModuleSymbols.AUTHENTICATION_REPOSITORY,
      )
      .to(AuthenticationRepository)
      .inTransientScope();
  },
};
