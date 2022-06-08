import { AppRegistry } from 'react-native';

import { App } from './ui/App';

export function initApp(appName: string) {
  AppRegistry.registerComponent(appName, () => App);
}
