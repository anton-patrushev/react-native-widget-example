import { NavigatorScreenParams } from '@react-navigation/native';

import { SharedRouterParamsList } from 'modules/app/ui/routers/SharedRouter/sharedRouter.types';

import { MainRouterScreens } from './mainRouter.screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainRouterParamsList = {
  [MainRouterScreens.BOTTOM_TAB]: undefined;
  [MainRouterScreens.SHARED]: NavigatorScreenParams<SharedRouterParamsList>;
};

export type BottomTabNavigationProp = NativeStackNavigationProp<
  MainRouterParamsList,
  MainRouterScreens.BOTTOM_TAB
>;
