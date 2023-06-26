import React from 'react';
import { ScrollView } from 'react-native';

import { useTheme } from 'modules/app/ui/theme/theme.hooks';
import { Text, View } from 'modules/shared/ui/components/Theme';
import { Colors } from 'modules/shared/presentation/colors/Colors';

import { COLORS_OPTIONS } from './colorPicker.consts';
import { ColorPickerOption } from './components/ColorPickerOption';

import styles from './colorPicker.styles';

interface IColorPickerScreenProps {
  selectColor: (color: Colors) => void;
  selectedColor: Colors;
}

export const ColorPicker = ({
  selectColor,
  selectedColor,
}: IColorPickerScreenProps) => {
  const theme = useTheme();

  return (
    <ScrollView
      style={[
        { backgroundColor: theme.colors.secondaryBackground },
        styles.screen,
      ]}>
      <Text variant="h3" style={styles.title} />
      <View backgroundColor="mainForeground" style={styles.options}>
        {COLORS_OPTIONS.map((it, index) => {
          const isLast = index === COLORS_OPTIONS.length - 1;
          const key = `color-picker-option:${it.value}`;

          return (
            <ColorPickerOption
              color={it.value}
              colorName={it.name}
              key={key}
              separatorDisabled={isLast}
              isSelected={it.value === selectedColor}
              selectColor={selectColor}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
