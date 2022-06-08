import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainRouterParamsList } from './mainRouter.types';
import { MainRouterScreens } from './mainRouter.screens';

const MainRouterStack = createNativeStackNavigator<MainRouterParamsList>();
export const MainRouter = () => {
  return (
    <MainRouterStack.Navigator>
      <MainRouterStack.Screen
        name={MainRouterScreens.BOTTOM_TAB}
        // TODO: implement bottom tab
        component={() => null}
      />
    </MainRouterStack.Navigator>
  );
};
