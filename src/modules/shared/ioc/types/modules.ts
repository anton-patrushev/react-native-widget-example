import { Container } from 'inversify';

type IoCModule<T> = {
  init(container: Container): T;
};

export type DIModule = IoCModule<void>;
export type AsyncDIModule = IoCModule<Promise<void>>;
