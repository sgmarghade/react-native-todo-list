/**
 * Created by swapnil on 08/05/17.
 */
import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/active-todo-list';

class ActiveTodos extends Component {
  constructor(props) {
    super(props);
    this.viewActiveTodo = this.viewActiveTodo.bind(this);
  }

  viewActiveTodo(todoName) {
    return () => {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer}>
          {
            this.props.todos.activeTodos.map((todo, index) => {
              return (
              <TouchableOpacity onPress={this.viewActiveTodo(todo.name)} key={todo.name+index}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemText}> {todo.name} </Text>
                  </View>
              </TouchableOpacity>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

function mapToStates(state) {
  return state;
}


export default connect(mapToStates)(ActiveTodos);
