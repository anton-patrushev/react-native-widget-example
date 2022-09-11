import React from 'react';

import { InjectionContext } from 'modules/shared/ioc/context';
import { AppRouter } from 'modules/app/ui/routers/AppRouter/AppRouter';

import { AppNavigationStateContext } from './contexts/AppNavigationState';
import { ThemeProvider } from 'modules/app/ui/contexts/Theme/ThemeProvider';
import { Navigation } from 'modules/app/ui/contexts/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <InjectionContext.Provider>
      <AppNavigationStateContext.Provider>
        <ThemeProvider>
          <SafeAreaProvider>
            <Navigation.Provider>
              <AppRouter />
            </Navigation.Provider>
          </SafeAreaProvider>
        </ThemeProvider>
      </AppNavigationStateContext.Provider>
    </InjectionContext.Provider>
  );
};
