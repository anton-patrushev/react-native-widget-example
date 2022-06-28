import React from 'react';
import { Text, View } from 'react-native';

import { Event } from 'modules/events/presentation/models/Event';

import styles from './eventItem.styles';

interface IEventItemProps {
  event: Event;
}

export const EventItem: React.FC<IEventItemProps> = ({ event }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{event.id}</Text>
    </View>
  );
};
