import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Colors } from 'modules/shared/presentation/colors/Colors';
import { Text, View } from 'modules/shared/ui/components/Theme';

import { ColorPickerOptionStyle } from './colorPickerOption.styles';
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
    <View backgroundColor="mainForeground" style={ColorPickerOptionStyle.item}>
      <TouchableOpacity onPress={selectColorOption}>
        <View style={ColorPickerOptionStyle.itemWithCheckmark}>
          <View style={ColorPickerOptionStyle.container}>
            <View
              style={[
                { backgroundColor: props.color },
                ColorPickerOptionStyle.color,
              ]}
            />
            <Text variant="h3">{props.colorName}</Text>
          </View>
          {props.isSelected ? (
            <Icon
              name="check-circle"
              color={Colors.GREEN}
              size={20}
              style={ColorPickerOptionStyle.checkMark}
            />
          ) : null}
        </View>
        {props.separatorDisabled ? null : (
          <View style={ColorPickerOptionStyle.separator} />
        )}
      </TouchableOpacity>
    </View>
  );
};
