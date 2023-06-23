import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppRouterScreens } from './appRouter.screens';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MainRouterParamsList } from 'modules/app/ui/routers/MainRouter/mainRouter.types';

export type AppRouterParamsList = {
  [AppRouterScreens.SPLASH]: undefined;
  [AppRouterScreens.SIGN_IN]: undefined;
  [AppRouterScreens.MAIN]: NavigatorScreenParams<MainRouterParamsList>;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  AppRouterParamsList,
  AppRouterScreens.SPLASH
>;

export type SignInScreenNavigationProp = NativeStackNavigationProp<
  AppRouterParamsList,
  AppRouterScreens.SIGN_IN
>;

export type MainRouterNavigationProp = NativeStackNavigationProp<
  AppRouterParamsList,
  AppRouterScreens.MAIN
>;
