import { NativeModules } from 'react-native';

interface IAppGroupIOSNativeModule {
  path: string;
}

const { AppGroup } = NativeModules;

export const AppGroupIOSNativeModule = AppGroup as IAppGroupIOSNativeModule;
