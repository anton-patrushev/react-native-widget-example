import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabRouterScreens } from 'modules/app/ui/routers/BottomTabRouter/bottomTabRouter.screens';
import { BottomTabRouterParamsList } from 'modules/app/ui/routers/BottomTabRouter/bottomTabRouter.types';

import { EventsListScreen } from 'modules/events/ui/screens/EventsList/EventsList';
import { EventsCalendarScreen } from 'modules/events/ui/screens/EventsCalendar/EventsCalendar';

import { EmptyComponent } from 'modules/shared/ui/components/EmptyComponent/EmptyComponent';

const BottomTab = createBottomTabNavigator<BottomTabRouterParamsList>();

export const BottomTabRouter = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ tabBarIcon: EmptyComponent, header: EmptyComponent }}>
      <BottomTab.Screen
        name={BottomTabRouterScreens.EVENTS_LIST}
        component={EventsListScreen}
      />
      <BottomTab.Screen
        name={BottomTabRouterScreens.EVENTS_CALENDAR}
        component={EventsCalendarScreen}
      />
    </BottomTab.Navigator>
  );
};
