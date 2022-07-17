import React from 'react';

import { InjectionContext } from 'modules/shared/ioc/context';
import { AppRouter } from 'modules/app/ui/routers/AppRouter/AppRouter';

import { AppNavigationStateContext } from './contexts/AppNavigationState';
import { ThemeProvider } from 'modules/app/ui/contexts/Theme/ThemeProvider';
import { Navigation } from 'modules/app/ui/contexts/Navigation';

export const App = () => {
  return (
    <InjectionContext.Provider>
      <AppNavigationStateContext.Provider>
        <ThemeProvider>
          <Navigation.Provider>
            <AppRouter />
          </Navigation.Provider>
        </ThemeProvider>
      </AppNavigationStateContext.Provider>
    </InjectionContext.Provider>
  );
};
