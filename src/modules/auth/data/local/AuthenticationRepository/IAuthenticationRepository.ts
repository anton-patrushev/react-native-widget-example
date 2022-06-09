export interface IAuthenticationRepository {
  authenticate(username: string, password: string): Promise<void>;
  revokeAuthentication(): Promise<void>;
}
