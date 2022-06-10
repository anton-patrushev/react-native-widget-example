import { inject, injectable } from 'inversify';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';
import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';
import { ISignOutUseCase } from 'modules/auth/domain/useCases/SignOutUseCase/ISignOutUseCase';

@injectable()
export class SignOutUseCase implements ISignOutUseCase {
  @inject(AuthModuleSymbols.AUTHENTICATION_REPOSITORY)
  private authenticationRepository!: IAuthenticationRepository;

  execute = (): Promise<void> => {
    return this.authenticationRepository.revokeAuthentication();
  };
}
