import React from 'react';
// TODO: disable due to Fabric is not correctly supported (navigation simply not working)
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { AppNavigationStateContextHooks } from 'modules/app/ui/contexts/AppNavigationState';
import { SignInScreen } from 'modules/auth/ui/screens/SignIn/SignIn';
import { SplashScreen } from 'modules/app/ui/screens/Splash/Splash';
import { MainRouter } from 'modules/app/ui/routers/MainRouter/MainRouter';

import { EmptyComponent } from 'modules/shared/ui/components/EmptyComponent/EmptyComponent';

import { AppRouterParamsList } from './appRouter.types';
import { AppRouterScreens } from './appRouter.screens';

const AppRouterStack = createStackNavigator<AppRouterParamsList>();

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
