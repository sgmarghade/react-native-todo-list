import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1
  },
  listNameContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    position: 'absolute',
    top: 0
  },

  todosListContainer: {
    flex: 1,
    padding: 1,
    marginTop: 55,
    borderWidth: 1,
  },

  todoItemContainer: {
    flex: 1,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 1,
    marginBottom: 1
  },

  bottomContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white'
  },

  addTodoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center'
  },

  listNameInput: {
    height: 50,
    width: 250
  },

  addTodoInput: {
    height: 50,
    width: 250,
    marginRight: 10
  },

  saveContainer: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
