/**
 * Created by swapnil on 08/05/17.
 */
import React, { Component } from 'react';
import { View, Text, Picker, TextInput, ToastAndroid } from 'react-native';
import styles from '../styles/new-active-todo';
import {connect} from 'react-redux';
import Button from 'react-native-button';
import * as Action from '../actions/todos';
import NewActiveTodoBaseItemSelection from './new-active-todo-base-item-selections';

class NewActiveTodo extends Component {
  constructor(props) {
    super(props);
    this.handleListNameChange = this.handleListNameChange.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.state = {
      listName: null,
      baseListName: null,
      itemList: []
    }
  }

  componentWillMount() {
    if(this.props.todos.baseTodos.length) {
      this.setState({
        baseListName: this.props.todos.baseTodos[0].name
      });
    }
  }

  handleListNameChange(e) {
    this.setState({
      listName: e.nativeEvent.text
    });
  }

  onItemsSelected(selectedList) {
    this.setState({itemList: selectedList});
  }

  saveTodo() {
    if(!this.state.listName) {
      ToastAndroid.show('Enter List Name',ToastAndroid.SHORT);
      return;
    }

    this.props.dispatch(Action.addActiveTodoList({name: this.state.listName, items: this.state.itemList}));
    ToastAndroid.show('List created successfully',ToastAndroid.SHORT);

    this.props.navigator.pop();
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.listNameContainer}>
          <TextInput
            style={styles.listNameInput}
            placeholder="List Name"
            value={this.state.listName}
            autoCorrect={false}
            onChange={this.handleListNameChange}
          />
        </View>
        <View style={styles.baseListNamesContainer}>
          <Text>Select Your Base List</Text>
          {this.props.todos.baseTodos.length > 0 &&
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.state.baseListName}
            onValueChange={(val) => this.setState({baseListName: val})}
            >
            {
              this.props.todos.baseTodos.map((baseTodo) => {
                return <Picker.Item key={baseTodo.name} label={baseTodo.name} value={baseTodo.name} />
                //return <Picker.Item key={index+1} label={index+1} value={index+1} />
              })
            }
          </Picker>}
        </View>
        {this.state.baseListName &&
          <NewActiveTodoBaseItemSelection
          selectedListName={this.state.baseListName}
          onItemsSelected={this.onItemsSelected}
          {...this.props}/>}

        <View style={styles.saveContainer}>
          <Button onPress={this.saveTodo} style={styles.saveBtn}>
            Save
          </Button>
        </View>
      </View>
    );
  }
}

function mapToStates(state) {
  return state;
}


export default connect(mapToStates)(NewActiveTodo);
