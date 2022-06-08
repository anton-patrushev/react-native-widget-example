import React from 'react';
import { Text, View } from 'react-native';

import styles from './splash.styles';

interface ISplashScreenProps {}

export const SplashScreen: React.FC<ISplashScreenProps> = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loading}>Loading app</Text>
    </View>
  );
};
