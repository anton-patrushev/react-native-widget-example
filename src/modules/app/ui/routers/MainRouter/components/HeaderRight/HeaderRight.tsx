import React from 'react';

import styles from './headerRight.styles';
import { Text, TouchableOpacity } from 'react-native';
import { useHeaderRight } from 'modules/app/ui/routers/MainRouter/components/HeaderRight/headerRight.hooks';

interface IHeaderRightProps {}

const PLUS = '+';

export const HeaderRight: React.FC<IHeaderRightProps> = () => {
  const { openCreateEvent } = useHeaderRight();

  return (
    <TouchableOpacity style={styles.button} onPress={openCreateEvent}>
      <Text style={styles.label}>{PLUS}</Text>
    </TouchableOpacity>
  );
};
