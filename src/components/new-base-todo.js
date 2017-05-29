/**
 * Created by swapnil on 08/05/17.
 */
import React, { Component } from 'react';
import { View, Text, TextInput, Button, ListView, ToastAndroid } from 'react-native';
import styles from '../styles/new-base-todo';
import * as Action from '../actions/todos';
import {connect} from 'react-redux';

const rowHasChanged = (r1, r2) => r1 !== r2;
const ds = new ListView.DataSource({rowHasChanged})

class NewBaseTodo extends Component {

  constructor(props) {
    super(props);
    this.handleListNameChange = this.handleListNameChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleAddTodoSubmit = this.handleAddTodoSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.state = {
      listName: null,
      addTodo: null,
      todos: []
    }
  }

  handleListNameChange(e) {
    let listName = e.nativeEvent.text;
    this.setState({listName});

    if (!listName) {
      listName = '';
    }

    this.setState({listName});
  }

  handleAddTodo(e) {
    let addTodo = e.nativeEvent.text;
    this.setState({addTodo});

    if (!addTodo) {
      addTodo = '';
    }
    this.setState({addTodo});
  }

  handleAddTodoSubmit() {
    if (this.state.addTodo) {
      this.setState({
        todos: [...this.state.todos, this.state.addTodo]
      });
    }
    this.setState({addTodo: ''});
  }

  removeItem(row) {
    return () => {
      this.setState({
        todos: this.state.todos.filter((todo) => todo !== row)
      });
    }
  }

  renderRow(row) {
    return (
      <View style={styles.todoItemContainer}>
        <Text>
          {row}
        </Text>
        <Button title="X" onPress={this.removeItem(row)}/>
      </View>
    )
  };

  saveTodo() {
    if(!this.state.listName) {
      ToastAndroid.show('Enter list name', ToastAndroid.SHORT);
      return;
    }

    if(!this.state.todos.length) {
      ToastAndroid.show('Enter items', ToastAndroid.SHORT);
      return;
    }

    this.props.dispatch(Action.addBaseTodoList({name: this.state.listName, items: this.state.todos}));

    ToastAndroid.show('Base List Created', ToastAndroid.SHORT);

    this.props.navigator.pop();
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.listNameContainer}>
          <TextInput
            style={styles.listNameInput}
            placeholder="Base List Name"
            value={this.state.listName}
            autoCorrect={false}
            onChange={this.handleListNameChange}
          />
        </View>

        <ListView
          enableEmptySections
          style={styles.todosListContainer}
          dataSource={ds.cloneWithRows(this.state.todos)}
          renderRow={this.renderRow}
        />

        <View style={styles.bottomContainer}>
          <View style={styles.addTodoContainer}>
            <TextInput
              ref='AddTodoInput'
              style={styles.addTodoInput}
              placeholder="Enter todo"
              value={this.state.addTodo}
              autoCorrect={false}
              onChange={this.handleAddTodo}
            />
            <Button title="Add" onPress={this.handleAddTodoSubmit}/>
          </View>
          <View style={styles.saveContainer}>
            <Button title="Save" onPress={this.saveTodo}/>
          </View>
        </View>
      </View>
    );
  }
}

function mapToStates(state) {
  return state;
}

export default connect(mapToStates)(NewBaseTodo);
