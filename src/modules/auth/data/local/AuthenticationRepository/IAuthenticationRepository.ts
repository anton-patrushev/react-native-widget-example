export interface IAuthenticationRepository {
  isAuthenticated(): Promise<boolean>;

  authenticate(username: string, password: string): Promise<void>;

  revokeAuthentication(): Promise<void>;
}
