import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreateEventScreen } from 'modules/events/ui/screens/CreateEvent/CreateEvent';

import { SharedRouterParamsList } from './sharedRouter.types';
import { SharedRouterScreens } from './sharedRouter.screens';

const SharedRouterStack = createNativeStackNavigator<SharedRouterParamsList>();

export const SharedRouter = () => {
  return (
    <SharedRouterStack.Navigator>
      <SharedRouterStack.Screen
        name={SharedRouterScreens.CREATE_EVENT}
        component={CreateEventScreen}
      />
    </SharedRouterStack.Navigator>
  );
};
