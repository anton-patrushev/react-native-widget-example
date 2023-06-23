import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabRouter } from 'modules/app/ui/routers/BottomTabRouter/BottomTabRouter';
import { SharedRouter } from 'modules/app/ui/routers/SharedRouter/SharedRouter';

import { HeaderLeft } from './components/HeaderLeft/HeaderLeft';
import { HeaderRight } from './components/HeaderRight/HeaderRight';

import { MainRouterParamsList } from './mainRouter.types';
import { MainRouterScreens } from './mainRouter.screens';
import { EmptyComponent } from 'modules/shared/ui/components/EmptyComponent/EmptyComponent';

const MainRouterStack = createNativeStackNavigator<MainRouterParamsList>();
export const MainRouter = () => {
  return (
    <MainRouterStack.Navigator initialRouteName={MainRouterScreens.BOTTOM_TAB}>
      <MainRouterStack.Screen
        name={MainRouterScreens.BOTTOM_TAB}
        component={BottomTabRouter}
        options={{
          headerLeft: HeaderLeft,
          headerRight: HeaderRight,
          headerTitle: '',
        }}
      />
      <MainRouterStack.Screen
        name={MainRouterScreens.SHARED}
        component={SharedRouter}
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal',
          header: EmptyComponent,
        }}
      />
    </MainRouterStack.Navigator>
  );
};
