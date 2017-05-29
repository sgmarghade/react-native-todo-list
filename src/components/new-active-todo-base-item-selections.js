import React, { Component } from 'react';
import { View, Text, TextInput, Button, ListView, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/base-item-selection-list';

class NewActiveTodoBaseItemSelection extends Component {

  constructor(props) {
    super(props);
    this.onToggleItem = this.onToggleItem.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.unSelectAll = this.unSelectAll.bind(this);
  }

  onItemsSelected() {}

  prepareState(selectedListName) {
    let baseTodoList;
    this.props.todos.baseTodos.forEach((baseTodo) => {
      if (baseTodo.name === selectedListName) {
        baseTodoList = baseTodo;
      }
    })

    let itemList = baseTodoList.items.map((item) => {
      return {
        isSelected: false,
        name: item
      };
    })

    this.setState({itemList});
  }

  componentWillMount() {
    this.prepareState(this.props.selectedListName);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedListName && this.props.selectedListName !== nextProps.selectedListName) {
      console.log('Inside ' + nextProps.selectedListName);
      this.prepareState(nextProps.selectedListName)
    }
  }

  onToggleItem(itemName) {
    return () => {
      let list = this.state.itemList.map((item) => {
        if (item.name === itemName) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });

      this.setState({itemList: list});
    }
  }

  selectAll() {
    let list = this.state.itemList.map((item) => {
      item.isSelected = true;
      return item;
    });

    this.setState({itemList: list});
  }

  unSelectAll() {
    let list = this.state.itemList.map((item) => {
      item.isSelected = false;
      return item;
    });

    this.setState({itemList: list});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View>
            <Button title="Select All" onPress={this.selectAll}/>
          </View>
          <View>
            <Button title="Unselect All" onPress={this.unSelectAll}/>
          </View>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {
            this.state.itemList.map((item, index) => {
              return (
                <TouchableOpacity onPress={this.onToggleItem(item.name)} key={item.name+index}>
                <View style={styles.itemContainer}>
                    <Text> {item.name} </Text>
                    <View style={styles.box}>
                      { item.isSelected && <View style={styles.inner}/> }
                    </View>
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


export default NewActiveTodoBaseItemSelection;
