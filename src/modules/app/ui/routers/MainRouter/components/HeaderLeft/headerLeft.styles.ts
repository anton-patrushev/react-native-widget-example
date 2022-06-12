import { StyleSheet } from 'react-native';
import { Colors } from 'modules/shared/domain/colors/Colors';

const HEADER_LEFT_SIZE = 36;

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY,
    borderRadius: HEADER_LEFT_SIZE / 2,
    width: HEADER_LEFT_SIZE,
    height: HEADER_LEFT_SIZE,
  },
});
