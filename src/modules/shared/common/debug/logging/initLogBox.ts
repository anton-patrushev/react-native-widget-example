import { LogBox } from 'react-native';

export const initLogBox = () => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
};
