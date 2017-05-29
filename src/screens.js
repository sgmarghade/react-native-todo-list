/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import ActiveTodos from './components/active-todo-list';
import BaseTodos from './components/base-todos';
import ActiveTodo from './components/active-todo';
import BaseTodo from './components/base-todo';
import NewActiveTodo from './components/new-active-todo';
import NewBaseTodo from './components/new-base-todo';
import Drawer from './components/drawer';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('montu.ActiveTodos', () => ActiveTodos, store, Provider);
  Navigation.registerComponent('montu.BaseTodos', () => BaseTodos, store, Provider);
  Navigation.registerComponent('montu.ActiveTodo', () => ActiveTodo, store, Provider);
  Navigation.registerComponent('montu.BaseTodo', () => BaseTodo, store, Provider);
  Navigation.registerComponent('montu.NewActiveTodo', () => NewActiveTodo, store, Provider);
  Navigation.registerComponent('montu.NewBaseTodo', () => NewBaseTodo, store, Provider);
  Navigation.registerComponent('montu.Drawer', () => Drawer, store, Provider);
}
