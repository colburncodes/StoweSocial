import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100},
  messageNumberContainer: {
    backgroundColor: '#DEB239',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 15,
    height: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 7,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: getFontFamily('Inter', 600),
  },
  groupStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  interestContainer: {
    marginTop: 30,
    marginHorizontal: 10,
    marginRight: 17,
  },
  interestHeader: {
    color: '#022150',
    marginBottom: 10,
    marginLeft: 20,
  },
  groupPostContainer: {
    marginHorizontal: 28,
  },
  calendarHeader: {
    color: '#022150',
    marginBottom: 10,
    marginLeft: 28,
  },
});

export default globalStyle;
