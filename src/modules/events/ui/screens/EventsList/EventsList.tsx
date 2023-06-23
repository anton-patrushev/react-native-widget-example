import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useEventsListScreen } from 'modules/events/ui/screens/EventsList/eventsList.hooks';

import { Event } from 'modules/events/presentation/models/Event';
import { EventItem } from 'modules/events/ui/screens/EventsList/components/EventItem';

const renderEventItem: ListRenderItem<Event> = ({ item }) => {
  return <EventItem event={item} />;
};

const keyExtractor = (item: Event) => String(item.id);

interface IEventsListScreenProps {}

export const EventsListScreen: React.FC<IEventsListScreenProps> = () => {
  const { events } = useEventsListScreen();

  return (
    <FlatList
      data={events}
      renderItem={renderEventItem}
      keyExtractor={keyExtractor}
    />
  );
};
