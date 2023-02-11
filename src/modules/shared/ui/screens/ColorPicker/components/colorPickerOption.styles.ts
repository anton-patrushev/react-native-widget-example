import { StyleSheet } from 'react-native';

import { COLOR_SIZE } from './colorPickerOption.consts';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export default StyleSheet.create({
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
  separator: {
    height: 1,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  color: {
    width: COLOR_SIZE,
    height: COLOR_SIZE,
    borderRadius: COLOR_SIZE / 2,
    margin: 10,
  },
});
