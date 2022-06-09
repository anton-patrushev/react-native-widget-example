import { initContainer } from './container';

interface IDIContainer {
  init(): Promise<void>;
}

export const DIContainer: IDIContainer = {
  init: async () => {
    await initContainer();
  },
};
