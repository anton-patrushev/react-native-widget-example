import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import type { ScreenNavigation } from 'modules/app/ui/contexts/Navigation/types';

import { Colors } from 'modules/shared/presentation/colors/Colors';

import { SharedRouterScreens } from './sharedRouter.screens';

export type SharedRouterParamsList = {
  [SharedRouterScreens.CREATE_EVENT_STACK]: undefined;
  [SharedRouterScreens.SELECT_DATE_TIME]: {
    minimumDate?: Date;
    initialDate: Date;
    submitDate(date: Date): void;
  };
  [SharedRouterScreens.COLOR_PICKER]: {
    initialColor?: Colors;
    submitColor(color?: Colors): void;
  };
};

export type SharedRouterScreenNavigation<Screen extends SharedRouterScreens> =
  ScreenNavigation<SharedRouterParamsList, Screen>;

export type SharedRouterNavigationProp =
  NativeStackNavigationProp<SharedRouterParamsList>;

export type CreateEventStackNavigationProp = NativeStackNavigationProp<
  SharedRouterParamsList,
  SharedRouterScreens.CREATE_EVENT_STACK
>;

export type SelectDateTimeNavigationProp = NativeStackNavigationProp<
  SharedRouterParamsList,
  SharedRouterScreens.SELECT_DATE_TIME
>;

export type SelectDateTimeRouteProp = RouteProp<
  SharedRouterParamsList,
  SharedRouterScreens.SELECT_DATE_TIME
>;

// type ScreenNavigation<T extends SharedRouterScreens> = {
//   navigation: NativeStackNavigationProp<SharedRouterParamsList, T>;
//   route: RouteProp<SharedRouterParamsList, T>;
// };

export type ColorPickerScreenNavigation =
  SharedRouterScreenNavigation<SharedRouterScreens.COLOR_PICKER>;
