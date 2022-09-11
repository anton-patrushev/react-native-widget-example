import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';

import { App } from './ui/App';
import { DIContainer } from './ioc/container';
import { initLogBox } from 'modules/shared/common/debug/logging/initLogBox';

export async function initApp(appName: string) {
  if (__DEV__) {
    initLogBox();
  }

  await DIContainer.init();

  AppRegistry.registerComponent(appName, () => App);
}
