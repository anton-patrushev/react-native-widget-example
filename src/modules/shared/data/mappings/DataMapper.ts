import { IMapper } from 'modules/shared/common/mappings/IMapper';
import { Mapper } from '@wufe/mapper';
import { injectable } from 'inversify';
import { eventLocalDataToEventDomain } from 'modules/events/data/local/db/mappings/maps/eventLocalDataToEventDomain';

@injectable()
export class DataMapper implements IMapper {
  public mapper: Mapper = new Mapper().withConfiguration((conf) =>
    conf.shouldIgnoreSourcePropertiesIfNotInDestination(true),
  );

  constructor() {
    this.init();
  }

  public init = () => {
    eventLocalDataToEventDomain(this.mapper);
  };
}
