import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppRouterScreens } from './appRouter.screens';

export type AppRouterParamsList = {
  [AppRouterScreens.SPLASH]: undefined;
  [AppRouterScreens.SIGN_IN]: undefined;
  [AppRouterScreens.MAIN]: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  AppRouterParamsList,
  AppRouterScreens.SPLASH
>;

export type SignInScreenNavigationProp = NativeStackNavigationProp<
  AppRouterParamsList,
  AppRouterScreens.SIGN_IN
>;
