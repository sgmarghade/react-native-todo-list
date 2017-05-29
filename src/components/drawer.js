import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';

import styles from '../styles/drawer';

class Drawer extends Component {
	constructor(props) {
		super(props);
	}


	onBaseListsPress() {
		this._toggleDrawer();
		this.props.navigator.push({
			screen: 'montu.BaseTodos',
			title: 'Base Todos'
		});
	}

	onActiveTodosPress() {
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: 'montu.ActiveTodos',
			animation: true
		});
	}

	onNewBaseListPress() {
	 this._toggleDrawer();
		this.props.navigator.push({
			screen: 'montu.NewBaseTodo',
			title: 'New Base List'
		});
	}

	onNewTodoPress() {
		this._toggleDrawer();
		this.props.navigator.push({
			screen: 'montu.NewActiveTodo',
			title: 'New Todo List'
		});
	}

	_toggleDrawer() {
	  this.props.navigator.toggleDrawer({
	    to: 'closed',
	    side: 'left',
	    animated: true
	  });
	}

	render() {
		return (
				<View style={styles.container}>
					<View style={styles.drawerList}>
						<TouchableOpacity onPress={() => this.onBaseListsPress()}>
							<View style={styles.drawerListItem}>
								<Text style={styles.drawerListItemText}>
									Base Lists
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onNewBaseListPress()}>
							<View style={styles.drawerListItem}>
								<Text style={styles.drawerListItemText}>
									New Base List
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onNewTodoPress()}>
							<View style={styles.drawerListItem}>
								<Text style={styles.drawerListItemText}>
									New Todo
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.onActiveTodosPress()}>
							<View style={styles.drawerListItem}>
								<Text style={styles.drawerListItemText}>
									All Todos
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<Text style={styles._version}>
						'v1.0.0'
					</Text>
				</View>
		);
	}
}


export default Drawer;
