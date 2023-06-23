import { Color } from 'modules/shared/presentation/types/Color';

export class CreateEventInput {
  public constructor(
    public title: string,
    public description: string,
    public color: Color,
    public startTime: Date,
    public endTime: Date,
  ) {}
}
