import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { SharedRouterScreens } from 'modules/app/ui/routers/SharedRouter/sharedRouter.screens';

export type SharedRouterParamsList = {
  [SharedRouterScreens.CREATE_EVENT]: undefined;
  [SharedRouterScreens.SELECT_DATE_TIME]: {
    minimumDate?: Date;
    initialDate: Date;
    submitDate(date: Date): void;
  };
};

export type SharedRouterNavigationProp =
  NativeStackNavigationProp<SharedRouterParamsList>;

export type CreateEventNavigationProp = NativeStackNavigationProp<
  SharedRouterParamsList,
  SharedRouterScreens.CREATE_EVENT
>;

export type SelectDateTimeNavigationProp = NativeStackNavigationProp<
  SharedRouterParamsList,
  SharedRouterScreens.SELECT_DATE_TIME
>;

export type SelectDateTimeRouteProp = RouteProp<
  SharedRouterParamsList,
  SharedRouterScreens.SELECT_DATE_TIME
>;
