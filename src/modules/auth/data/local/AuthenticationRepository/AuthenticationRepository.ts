import { injectable } from 'inversify';

import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';

@injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
  authenticate = async (username: string, password: string): Promise<void> => {
    // return Promise.resolve(undefined);
    console.log('REPOSITORY ->', username, password);
  };

  revokeAuthentication = async (): Promise<void> => {
    // return Promise.resolve(undefined);
  };
}
