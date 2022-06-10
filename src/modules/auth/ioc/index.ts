import { DIModule } from 'modules/shared/ioc/types/modules';

import { ILoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/ILoginUseCase';
import { LoginUseCase } from 'modules/auth/domain/useCases/LoginUseCase/LoginUseCase';
import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';
import { AuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/AuthenticationRepository';
import { IGetIsAuthenticatedUseCase } from 'modules/auth/domain/useCases/GetIsAuthenticatedUseCase/IGetIsAuthenticatedUseCase';
import { GetIsAuthenticatedUseCase } from 'modules/auth/domain/useCases/GetIsAuthenticatedUseCase/GetIsAuthenticatedUseCase';

import { AuthModuleSymbols } from './symbols';
import { ISignOutUseCase } from 'modules/auth/domain/useCases/SignOutUseCase/ISignOutUseCase';
import { SignOutUseCase } from 'modules/auth/domain/useCases/SignOutUseCase/SignOutUseCase';

export const AuthModule: DIModule = {
  init: (container) => {
    container
      .bind<IGetIsAuthenticatedUseCase>(
        AuthModuleSymbols.GET_IS_AUTHENTICATED_USE_CASE,
      )
      .to(GetIsAuthenticatedUseCase)
      .inTransientScope();
    container
      .bind<ISignOutUseCase>(AuthModuleSymbols.SIGN_OUT_USE_CASE)
      .to(SignOutUseCase)
      .inTransientScope();
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
