import { StyleSheet } from 'react-native';
import { Colors } from 'modules/shared/presentation/colors/Colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 100,
  },
  welcome: {
    fontSize: 36,
    marginLeft: 20,
    marginBottom: 20,
  },
  input: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  inputLabel: {
    marginLeft: 20,
  },
});
