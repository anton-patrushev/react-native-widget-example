import React from 'react';
import { Text, View } from 'react-native';

import styles from './createEvent.styles';
import { useCreateEventScreen } from 'modules/events/ui/screens/CreateEvent/createEvent.hooks';

interface ICreateEventScreenProps {}

export const CreateEventScreen: React.FC<ICreateEventScreenProps> = () => {
  const {} = useCreateEventScreen();

  return (
    <View style={styles.screen}>
      <Text>CREATE EVENT !!!</Text>
    </View>
  );
};
