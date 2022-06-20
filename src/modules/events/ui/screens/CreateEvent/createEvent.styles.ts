import { StyleSheet } from 'react-native';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export default StyleSheet.create({
  screen: { flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' },
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
  inputContainer: {
    padding: 10,
  },
  input: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
  },
  inputLabel: {},
  colorPickerButton: {
    marginTop: 10,
    width: 160,
    height: 30,
    borderRadius: 5,
  },
  datePickerButton: {
    backgroundColor: Colors.LIGHT_GRAY,
    marginTop: 10,
    borderRadius: 5,
    width: 160,
    height: 30,
    paddingHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  datePickerButtonLabel: {
    color: Colors.GRAY,
  },
});
