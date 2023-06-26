import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreateEventScreen } from 'modules/events/ui/screens/CreateEvent/CreateEvent';
import { SelectColorForEvent } from 'modules/events/ui/screens/SelectColorForEvent/SelectColorForEvent.screen';
import { CreateEventContextProvider } from 'modules/events/ui/contexts/CreateEventForm/providers';
import { SelectStartDateTimeForEvent } from 'modules/events/ui/screens/SelectDateTimeForEvent/SelectStartDateTimeForEvent/SelectStartDateTimeForEvent.screen';
import { SelectEndDateTimeForEvent } from 'modules/events/ui/screens/SelectDateTimeForEvent/SelectEndDateTimeForEvent/SelectEndDateTimeForEvent.screen';

import { CreateEventRouterScreens } from './CreateEventRouter.screens';
import { CreateEventRouterParamsList } from './CreateEventRouter.types';
import {
  CREATE_EVENT_SCREEN_OPTIONS,
  SELECT_COLOR_SCREEN_OPTIONS,
  SELECT_END_DATE_TIME_EVENT_SCREEN_OPTIONS,
  SELECT_START_DATE_TIME_EVENT_SCREEN_OPTIONS,
} from './CreateEventRouter.consts';

const CreateEventStack =
  createNativeStackNavigator<CreateEventRouterParamsList>();

export const CreateEventRouter = () => {
  return (
    <CreateEventContextProvider>
      <CreateEventStack.Navigator
        initialRouteName={CreateEventRouterScreens.CREATE_EVENT}>
        <CreateEventStack.Screen
          name={CreateEventRouterScreens.CREATE_EVENT}
          component={CreateEventScreen}
          options={CREATE_EVENT_SCREEN_OPTIONS}
        />
        <CreateEventStack.Screen
          name={CreateEventRouterScreens.SELECT_COLOR}
          component={SelectColorForEvent}
          options={SELECT_COLOR_SCREEN_OPTIONS}
        />
        <CreateEventStack.Screen
          name={CreateEventRouterScreens.SELECT_START_DATE_TIME}
          component={SelectStartDateTimeForEvent}
          options={SELECT_START_DATE_TIME_EVENT_SCREEN_OPTIONS}
        />
        <CreateEventStack.Screen
          name={CreateEventRouterScreens.SELECT_END_DATE_TIME}
          component={SelectEndDateTimeForEvent}
          options={SELECT_END_DATE_TIME_EVENT_SCREEN_OPTIONS}
        />
      </CreateEventStack.Navigator>
    </CreateEventContextProvider>
  );
};
