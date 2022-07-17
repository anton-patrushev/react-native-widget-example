import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CreateEventScreen } from 'modules/events/ui/screens/CreateEvent/CreateEvent';
import { SelectDateTime } from 'modules/shared/ui/screens/SelectDateTime/SelectDateTime';
import { ColorPickerScreen } from 'modules/shared/ui/screens/ColorPicker/ColorPicker';

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
      <SharedRouterStack.Screen
        name={SharedRouterScreens.SELECT_DATE_TIME}
        component={SelectDateTime}
      />
      <SharedRouterStack.Screen
        name={SharedRouterScreens.COLOR_PICKER}
        component={ColorPickerScreen}
      />
    </SharedRouterStack.Navigator>
  );
};
