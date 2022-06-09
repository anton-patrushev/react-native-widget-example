import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { InjectionContext } from 'modules/shared/ioc/context';
import { AppRouter } from 'modules/app/ui/routers/AppRouter/AppRouter';

import { AppNavigationStateContext } from './contexts/AppNavigationState';

export const App = () => {
  return (
    <InjectionContext.Provider>
      <AppNavigationStateContext.Provider>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </AppNavigationStateContext.Provider>
    </InjectionContext.Provider>
  );
};
