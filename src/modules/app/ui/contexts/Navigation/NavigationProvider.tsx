import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

interface INavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<INavigationProviderProps> = (
  props,
) => {
  return <NavigationContainer {...props} />;
};
