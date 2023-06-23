import { injectable } from 'inversify';
import SInfo from 'react-native-sensitive-info';

import { IAuthenticationRepository } from 'modules/auth/data/local/AuthenticationRepository/IAuthenticationRepository';

@injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
  private keychainService = 'WidgetExample';
  private usernameKey = `${this.keychainService}.username`;
  private passwordKey = `${this.keychainService}.password`;

  private authenticateNewUser = async (username: string, password: string) => {
    try {
      await SInfo.setItem(this.usernameKey, username, {
        keychainService: this.keychainService,
      });
      await SInfo.setItem(this.passwordKey, password, {
        keychainService: this.keychainService,
      });
    } catch (e) {
      console.log(e);
      throw new Error('Creating account failed');
    }
  };

  private getCurrentlyStoredAuthenticationData = async (): Promise<
    [string, string]
  > => {
    try {
      const username = await SInfo.getItem(this.usernameKey, {
        keychainService: this.keychainService,
      });
      const password = await SInfo.getItem(this.passwordKey, {
        keychainService: this.keychainService,
      });

      return [username, password];
    } catch {
      throw new Error('Something went wrong');
    }
  };

  isAuthenticated = async (): Promise<boolean> => {
    const storedUsername = await SInfo.getItem(this.usernameKey, {
      keychainService: this.keychainService,
    });

    return Boolean(storedUsername);
  };

  authenticate = async (username: string, password: string): Promise<void> => {
    const [storedUsername, storedPassword] =
      await this.getCurrentlyStoredAuthenticationData();

    if (storedUsername === username && storedPassword === password) {
      return;
    }

    if (storedUsername !== username) {
      return this.authenticateNewUser(username, password);
    }

    if (storedPassword !== password) {
      throw new Error("Password doesn't match");
    }
  };

  revokeAuthentication = async (): Promise<void> => {
    try {
      await Promise.allSettled([
        SInfo.deleteItem(this.usernameKey, {
          keychainService: this.keychainService,
        }),
        SInfo.deleteItem(this.passwordKey, {
          keychainService: this.keychainService,
        }),
      ]);
    } catch {
      throw new Error('Something went wrong');
    }
  };
}
