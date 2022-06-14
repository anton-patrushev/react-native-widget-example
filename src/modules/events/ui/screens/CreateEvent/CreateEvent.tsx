import React from 'react';
import { Text, View } from 'react-native';

import styles from './createEvent.styles';

interface ICreateEventScreenProps {}

export const CreateEventScreen: React.FC<ICreateEventScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <Text>CREATE EVENT !!!</Text>
    </View>
  );
};
