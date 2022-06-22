import { Container } from 'inversify';

import { DIModule } from 'modules/shared/ioc/types/modules';
import { IWatermelonClient } from 'modules/app/data/local/db/common/client/IWatermelonClient';
import { WatermelonClient } from 'modules/app/data/local/db/common/client/WatermelonClient';
import { AppModuleSymbols } from 'modules/app/ioc/symbols';

export const AppModule: DIModule = {
  init: (container: Container): void => {
    container
      .bind<IWatermelonClient>(AppModuleSymbols.WATERMELON_CLIENT)
      .to(WatermelonClient)
      .inSingletonScope();
  },
};
