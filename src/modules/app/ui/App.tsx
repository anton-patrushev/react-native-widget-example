import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { InjectionContext } from 'modules/shared/ioc/context';
import { AppRouter } from 'modules/app/ui/routers/AppRouter/AppRouter';

import { AppNavigationStateContext } from './contexts/AppNavigationState';
import { ThemeProvider } from 'modules/app/ui/contexts/Theme/ThemeProvider';

export const App = () => {
  return (
    <InjectionContext.Provider>
      <AppNavigationStateContext.Provider>
        <ThemeProvider>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </ThemeProvider>
      </AppNavigationStateContext.Provider>
    </InjectionContext.Provider>
  );
};
