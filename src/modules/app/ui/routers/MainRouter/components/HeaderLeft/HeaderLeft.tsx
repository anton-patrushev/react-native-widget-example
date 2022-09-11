import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useHeaderLeft } from './headerLeft.hooks';
import styles from './headerLeft.styles';

interface IHeaderLeftProps {}

export const HeaderLeft: React.FC<IHeaderLeftProps> = () => {
  const { openSignOutPrompt } = useHeaderLeft();

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={openSignOutPrompt} />
    </SafeAreaView>
  );
};
