import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  upper_tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: 'black',
  },
  tab_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    padding: 10,
  },
  title_container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  no_data_text: {
    fontSize: 12,
    color: 'red',
  },
  title_button: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 12,
    marginRight: 30,
  },
});
