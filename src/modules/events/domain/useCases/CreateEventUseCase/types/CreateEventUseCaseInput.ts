export class CreateEventUseCaseInput {
  constructor(
    public title: string,
    public description: string,
    public color: string,
    public startTime: Date,
    public endTime: Date,
  ) {}
}
