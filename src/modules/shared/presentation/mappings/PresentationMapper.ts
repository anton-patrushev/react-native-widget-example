import { IMapper } from 'modules/shared/common/mappings/IMapper';
import { Mapper } from '@wufe/mapper';
import { eventDomainToEventPresentation } from 'modules/events/presentation/mappings/maps/eventDomainToEventPresentation';
import { injectable } from 'inversify';

@injectable()
export class PresentationMapper implements IMapper {
  public mapper: Mapper = new Mapper().withConfiguration((conf) =>
    conf.shouldIgnoreSourcePropertiesIfNotInDestination(true),
  );

  constructor() {
    this.init();
  }

  public init = () => {
    eventDomainToEventPresentation(this.mapper);
  };
}
