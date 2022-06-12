import { Container } from 'inversify';

import { AuthModule } from 'modules/auth/ioc';
import { EventsModule } from 'modules/events/ioc';

export let container: Container;

export async function initContainer(): Promise<Container> {
  container = new Container();

  AuthModule.init(container);
  EventsModule.init(container);

  return container;
}
