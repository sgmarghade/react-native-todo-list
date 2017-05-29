/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist'
import {AsyncStorage} from 'react-native'

let middleware = [];


middleware = [...middleware];

export default function configureStore() {
  let store = createStore(
    rootReducer,
    undefined,
    autoRehydrate()
  );

  persistStore(store, {storage: AsyncStorage});

  return store;
}
