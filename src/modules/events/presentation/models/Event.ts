import { Color } from 'modules/shared/presentation/types/Color';

export class Event {
  public constructor(
    public id: number,
    public title: string,
    public color: Color,
    public description: string,
    public startTime: Date,
    public endTime: Date,
  ) {}
}
