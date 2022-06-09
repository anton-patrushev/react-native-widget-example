import { Container } from 'inversify';
import { AuthModule } from '../../auth/ioc';

export let container: Container;

export async function initContainer(): Promise<Container> {
  container = new Container();

  AuthModule.init(container);

  return container;
}
