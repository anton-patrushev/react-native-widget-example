import { inject, injectable } from 'inversify';

import { ILoginUseCase } from './ILoginUseCase';
import { LoginUseCaseResult } from './types/LoginUseCaseResult';
import { LoginUseCaseInput } from './types/LoginUseCaseInput';
import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';
import { AuthModuleSymbols } from 'modules/auth/ioc/symbols';

@injectable()
export class LoginUseCase implements ILoginUseCase {
  @inject(AuthModuleSymbols.AUTHENTICATION_REPOSITORY)
  private authenticationRepository!: IAuthenticationRepository;

  execute = async (input: LoginUseCaseInput): LoginUseCaseResult => {
    console.log(input);
    await this.authenticationRepository.authenticate(
      input.username,
      input.password,
    );
  };
}
