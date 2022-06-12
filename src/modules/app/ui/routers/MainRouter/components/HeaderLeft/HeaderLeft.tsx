import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from 'modules/app/ui/routers/MainRouter/components/HeaderLeft/headerLeft.styles';
import { useHeaderLeft } from 'modules/app/ui/routers/MainRouter/components/HeaderLeft/headerLeft.hooks';

interface IHeaderLeftProps {}

export const HeaderLeft: React.FC<IHeaderLeftProps> = () => {
  const { openSignOutPrompt } = useHeaderLeft();

  return (
    <TouchableOpacity style={styles.container} onPress={openSignOutPrompt} />
  );
};
