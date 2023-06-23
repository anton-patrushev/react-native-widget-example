import React from 'react';
import { Text, View } from 'react-native';

import styles from './splash.styles';
import { useSplash } from './splash.hooks';

interface ISplashScreenProps {}

export const SplashScreen: React.FC<ISplashScreenProps> = () => {
  useSplash();

  return (
    <View style={styles.screen}>
      <Text style={styles.loading}>Loading app</Text>
    </View>
  );
};
