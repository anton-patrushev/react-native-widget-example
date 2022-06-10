import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabRouterScreens } from 'modules/app/ui/routers/BottomTabRouter/bottomTabRouter.screens';

const BottomTab = createBottomTabNavigator();

export const BottomTabRouter = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={BottomTabRouterScreens.EVENTS_LIST}
        component={() => null}
      />
      <BottomTab.Screen
        name={BottomTabRouterScreens.EVENTS_CALENDAR}
        component={() => null}
      />
    </BottomTab.Navigator>
  );
};
