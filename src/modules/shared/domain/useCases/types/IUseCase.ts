export interface IUseCase<Input, Result> {
  execute(input: Input): Result;
}
