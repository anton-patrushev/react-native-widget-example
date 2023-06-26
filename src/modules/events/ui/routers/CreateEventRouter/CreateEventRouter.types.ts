import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateEventRouterScreens } from 'modules/events/ui/routers/CreateEventRouter/CreateEventRouter.screens';

export type CreateEventRouterParamsList = {
  [CreateEventRouterScreens.CREATE_EVENT]: undefined;
  [CreateEventRouterScreens.SELECT_COLOR]: undefined;
  [CreateEventRouterScreens.SELECT_START_DATE_TIME]: undefined;
  [CreateEventRouterScreens.SELECT_END_DATE_TIME]: undefined;
};

export type CreateEventRouterNavigationProp =
  NativeStackNavigationProp<CreateEventRouterParamsList>;

export type CreateEventRouterScreenNavigationProp<
  Screen extends CreateEventRouterScreens,
> = NativeStackNavigationProp<CreateEventRouterParamsList, Screen>;

export type CreateEventNavigationProp =
  CreateEventRouterScreenNavigationProp<CreateEventRouterScreens.CREATE_EVENT>;

export type SelectColorNavigationProp =
  CreateEventRouterScreenNavigationProp<CreateEventRouterScreens.SELECT_COLOR>;

export type SelectStartDateTimeNavigationProp =
  CreateEventRouterScreenNavigationProp<CreateEventRouterScreens.SELECT_START_DATE_TIME>;

export type SelectEndDateTimeNavigationProp =
  CreateEventRouterScreenNavigationProp<CreateEventRouterScreens.SELECT_END_DATE_TIME>;
