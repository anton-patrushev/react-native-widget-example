import { IGetIsAuthenticatedUseCase } from 'modules/auth/domain/useCases/GetIsAuthenticatedUseCase/IGetIsAuthenticatedUseCase';
import { inject, injectable } from 'inversify';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';
import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';

@injectable()
export class GetIsAuthenticatedUseCase implements IGetIsAuthenticatedUseCase {
  @inject(AuthModuleSymbols.AUTHENTICATION_REPOSITORY)
  private authenticationRepository!: IAuthenticationRepository;

  execute = async (): Promise<void> => {
    const isAuthenticated =
      await this.authenticationRepository.isAuthenticated();

    if (!isAuthenticated) {
      throw new Error('No currently authenticated user');
    }
  };
}
