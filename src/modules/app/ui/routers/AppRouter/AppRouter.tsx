import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppNavigationStateContextHooks } from 'modules/app/ui/contexts/AppNavigationState';
import { SignInScreen } from 'modules/auth/ui/screens/SignIn/SignIn.screen';
import { SplashScreen } from 'modules/app/ui/screens/Splash/Splash';
import { MainRouter } from 'modules/app/ui/routers/MainRouter/MainRouter';

import { EmptyComponent } from 'modules/shared/ui/components/EmptyComponent/EmptyComponent';

import { AppRouterParamsList } from './appRouter.types';
import { AppRouterScreens } from './appRouter.screens';

const AppRouterStack = createNativeStackNavigator<AppRouterParamsList>();

export const AppRouter = () => {
  const isAuthenticated = AppNavigationStateContextHooks.useIsAuthenticated();

  return (
    <AppRouterStack.Navigator
      initialRouteName={AppRouterScreens.SPLASH}
      screenOptions={{ header: EmptyComponent }}>
      {isAuthenticated ? (
        <>
          <AppRouterStack.Screen
            name={AppRouterScreens.MAIN}
            component={MainRouter}
          />
        </>
      ) : (
        <>
          <AppRouterStack.Screen
            name={AppRouterScreens.SPLASH}
            component={SplashScreen}
          />
          <AppRouterStack.Screen
            name={AppRouterScreens.SIGN_IN}
            component={SignInScreen}
          />
        </>
      )}
    </AppRouterStack.Navigator>
  );
};
