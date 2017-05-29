import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

var store ;
try {
  store = configureStore();
}catch(e) {
  console.log('error');
  console.log(e);
}

try {
  registerScreens(store, Provider);
}catch(e) {
  console.log('error');
  console.log(e);
}

const navigatorStyle = {
  statusBarColor: 'black',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'black',
  navBarBackgroundColor: '#0a0a0a',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
};

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'montu.ActiveTodos',
      title: 'Active List',
      navigatorStyle,
      leftButtons: [
        {
          id: 'sideMenu'
        }
      ]
    },
    drawer: {
      left: {
        screen: 'montu.Drawer'
      }
    }
  });

