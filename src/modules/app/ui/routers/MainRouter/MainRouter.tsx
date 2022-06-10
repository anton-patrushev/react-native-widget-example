import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabRouter } from 'modules/app/ui/routers/BottomTabRouter/BottomTabRouter';

import { MainRouterParamsList } from './mainRouter.types';
import { MainRouterScreens } from './mainRouter.screens';

const MainRouterStack = createNativeStackNavigator<MainRouterParamsList>();
export const MainRouter = () => {
  return (
    <MainRouterStack.Navigator initialRouteName={MainRouterScreens.BOTTOM_TAB}>
      <MainRouterStack.Screen
        name={MainRouterScreens.BOTTOM_TAB}
        component={BottomTabRouter}
      />
    </MainRouterStack.Navigator>
  );
};
