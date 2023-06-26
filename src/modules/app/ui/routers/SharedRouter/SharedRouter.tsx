import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { SelectDateTime } from 'modules/shared/ui/screens/SelectDateTime/SelectDateTime';
// import { ColorPicker } from 'modules/shared/ui/screens/ColorPicker/ColorPicker';

import { SharedRouterParamsList } from './sharedRouter.types';
import { SharedRouterScreens } from './sharedRouter.screens';
import { CreateEventRouter } from 'modules/events/ui/routers/CreateEventRouter/CreateEvent.router';

const SharedRouterStack = createNativeStackNavigator<SharedRouterParamsList>();

export const SharedRouter = () => {
  return (
    <SharedRouterStack.Navigator screenOptions={{ headerShown: false }}>
      <SharedRouterStack.Screen
        name={SharedRouterScreens.CREATE_EVENT_STACK}
        component={CreateEventRouter}
      />
      {/* <SharedRouterStack.Screen
        name={SharedRouterScreens.SELECT_DATE_TIME}
        component={SelectDateTime}
      /> */}
      {/* <SharedRouterStack.Screen
        name={SharedRouterScreens.COLOR_PICKER}
        component={ColorPicker}
      /> */}
    </SharedRouterStack.Navigator>
  );
};
