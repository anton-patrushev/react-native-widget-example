import { AppRegistry } from 'react-native';

import { App } from './ui/App';
import { DIContainer } from './ioc';

export async function initApp(appName: string) {
  await DIContainer.init();

  AppRegistry.registerComponent(appName, () => App);
}
