import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  item: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  color: {
    height: '90%',
    width: 3,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  colorAndInfo: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  eventInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  duration: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  startTime: {
    paddingBottom: 5,
  },
  title: {
    paddingBottom: 5,
  },
});
