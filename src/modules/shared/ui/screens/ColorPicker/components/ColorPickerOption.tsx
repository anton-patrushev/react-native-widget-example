import React from 'react';

import { Colors } from 'modules/shared/presentation/colors/Colors';
import { Text, View } from 'modules/shared/ui/components/Theme';

import styles from './colorPickerOption.styles';
import { TouchableOpacity } from 'react-native';

interface IColorPickerOptionProps {
  color: Colors;
  colorName: string;
  separatorDisabled?: boolean;

  isSelected: boolean;

  selectColor(color: Colors): void;
}

export const ColorPickerOption: React.FC<IColorPickerOptionProps> = (props) => {
  const selectColorOption = () => {
    props.selectColor(props.color);
  };

  return (
    <View backgroundColor="mainForeground" style={styles.item}>
      <TouchableOpacity onPress={selectColorOption}>
        <View style={styles.container}>
          <View style={[{ backgroundColor: props.color }, styles.color]} />
          <Text variant="h3">{props.colorName}</Text>
        </View>
        {props.separatorDisabled ? null : <View style={styles.separator} />}
      </TouchableOpacity>
    </View>
  );
};
