import { StyleSheet } from 'react-native';
import { Colors } from 'modules/shared/presentation/colors/Colors';

const HEADER_RIGHT_SIZE = 36;

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.BLUE,
    height: HEADER_RIGHT_SIZE,
    width: HEADER_RIGHT_SIZE * 1.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 24,
  },
});
