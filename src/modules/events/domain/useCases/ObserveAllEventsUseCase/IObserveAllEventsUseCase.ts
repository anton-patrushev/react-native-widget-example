import { Observable } from 'rxjs';

import { IUseCase } from 'modules/shared/domain/useCases/types/IUseCase';
import { Event } from 'modules/events/domain/models/Event';

export interface IObserveAllEventsUseCase
  extends IUseCase<void, Observable<Array<Event>>> {}
