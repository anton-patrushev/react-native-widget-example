import { SharedRouterScreens } from 'modules/app/ui/routers/SharedRouter/sharedRouter.screens';

const prefix = SharedRouterScreens.CREATE_EVENT_STACK;

export enum CreateEventRouterScreens {
  CREATE_EVENT = `${prefix}/CreateEvent`,
  SELECT_COLOR = `${prefix}/SelectColor`,
  SELECT_START_DATE_TIME = `${prefix}/SelectStartDateTime`,
  SELECT_END_DATE_TIME = `${prefix}/SelectEndDateTime`,
}
