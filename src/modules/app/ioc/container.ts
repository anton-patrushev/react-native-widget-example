import { Container } from 'inversify';

import { AuthModule } from 'modules/auth/ioc';
import { EventsModule } from 'modules/events/ioc';
import { SharedModule } from 'modules/shared/ioc';
import { AppModule } from 'modules/app/ioc/index';

interface IDIContainer {
  container: Container;

  init(): void;
}

class _DIContainer implements IDIContainer {
  container!: Container;

  init = () => {
    this.initContainer();
  };

  private initContainer = () => {
    this.container = new Container();

    AppModule.init(this.container);
    SharedModule.init(this.container);
    AuthModule.init(this.container);
    EventsModule.init(this.container);
  };
}

export const DIContainer = new _DIContainer();
