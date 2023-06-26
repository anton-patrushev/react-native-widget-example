import { StyleSheet } from 'react-native';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export const SelectDateTimeStyle = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  submitButton: {
    backgroundColor: Colors.BLUE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 60,
    height: 30,
  },
  submitButtonLabel: { color: Colors.WHITE, textAlign: 'center' },
});
