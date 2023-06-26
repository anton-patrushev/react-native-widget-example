import { StyleSheet } from 'react-native';

import { COLOR_SIZE } from './colorPickerOption.consts';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export const ColorPickerOptionStyle = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemWithCheckmark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.LIGHT_GRAY,
    opacity: 0.3,
    marginLeft: 40,
    marginRight: 20,
  },
  checkMark: { marginRight: 20 },
  color: {
    width: COLOR_SIZE,
    height: COLOR_SIZE,
    borderRadius: COLOR_SIZE / 2,
    margin: 10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GRAY,
  },
});
