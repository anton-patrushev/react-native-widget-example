import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SharedRouterScreens } from 'modules/app/ui/routers/SharedRouter/sharedRouter.screens';

export type SharedRouterParamsList = {
  [SharedRouterScreens.CREATE_EVENT]: undefined;
};

export type SharedRouterNavigationProp =
  NativeStackNavigationProp<SharedRouterParamsList>;
