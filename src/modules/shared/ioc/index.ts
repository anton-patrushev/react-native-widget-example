import { DIModule } from 'modules/shared/ioc/types/modules';
import { IMapper } from 'modules/shared/common/mappings/IMapper';
import { PresentationMapper } from 'modules/shared/presentation/mappings/PresentationMapper';
import { SharedModuleSymbols } from 'modules/shared/ioc/symbols';
import { DataMapper } from 'modules/shared/data/mappings/DataMapper';

export const SharedModule: DIModule = {
  init: (container): void => {
    container
      .bind<IMapper>(SharedModuleSymbols.PRESENTATION_MAPPER)
      .to(PresentationMapper)
      .inTransientScope();
    container
      .bind<IMapper>(SharedModuleSymbols.DATA_MAPPER)
      .to(DataMapper)
      .inTransientScope();
  },
};
