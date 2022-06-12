export class Event {
  constructor(
    public id: number,
    public title: string,
    public description: string | null,
    public color: string,
    public startTime: Date,
    public endTime: Date,
  ) {}
}
