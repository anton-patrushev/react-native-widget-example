import React from 'react';

import { Event } from 'modules/events/presentation/models/Event';
import { Text, View } from 'modules/shared/ui/components/Theme';

import { formatEventDuration } from './eventItem.utils';
import styles from './eventItem.styles';

interface IEventItemProps {
  event: Event;
}

export const EventItem: React.FC<IEventItemProps> = ({ event }) => {
  return (
    <View backgroundColor="mainForeground" style={styles.item}>
      <View style={styles.colorAndInfo}>
        <View style={[{ backgroundColor: event.color }, styles.color]} />
        <View style={styles.eventInfo}>
          <Text variant="h3" style={styles.title}>
            {event.title}
          </Text>
          <Text variant="h3">{event.description}</Text>
        </View>
      </View>
      <View style={styles.duration}>
        <Text variant="h3" style={styles.startTime}>
          {formatEventDuration(event.startTime)}
        </Text>
        <Text variant="h3">{formatEventDuration(event.endTime)}</Text>
      </View>
    </View>
  );
};
