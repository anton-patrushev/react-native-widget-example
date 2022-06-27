import React from 'react';
import { View } from 'react-native';
import { useEventsListScreen } from 'modules/events/ui/screens/EventsList/eventsList.hooks';

interface IEventsListScreenProps {}

export const EventsListScreen: React.FC<IEventsListScreenProps> = () => {
  const { events } = useEventsListScreen();

  console.log('~~~ EVENTS: ', events);

  return <View></View>;
};
