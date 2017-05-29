import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1
  },

  listNameContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    top: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60
  },

  baseListNamesContainer: {
    marginTop: 10,
    height: 70,
    borderWidth: 1,
    alignItems: 'center'
  },

  listNameInput: {
    height: 50,
    width: 250
  },
  pickerStyle: {
    width: 200,
  },
  saveContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    right: 50,
    left: 50,
    justifyContent: 'center'
  },
  saveBtn: {
    margin: 5,
    width: 250,
    height: 50,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'blue'
  }
});

export default styles;
