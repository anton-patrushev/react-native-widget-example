import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppRouter } from 'modules/app/ui/routers/AppRouter/AppRouter';

import { AppNavigationStateContext } from './contexts/AppNavigationState';

export const App = () => {
  return (
    <AppNavigationStateContext.Provider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </AppNavigationStateContext.Provider>
  );
};
