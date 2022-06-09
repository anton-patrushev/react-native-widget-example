import { injectable } from 'inversify';

import { ILoginUseCase } from './ILoginUseCase';
import { LoginUseCaseResult } from './types/LoginUseCaseResult';
import { LoginUseCaseInput } from './types/LoginUseCaseInput';

@injectable()
export class LoginUseCase implements ILoginUseCase {
  execute = async (input: LoginUseCaseInput): LoginUseCaseResult => {
    console.log(input);
  };
}
