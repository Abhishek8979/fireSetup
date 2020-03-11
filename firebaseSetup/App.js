import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store'
import Screen from './app/screens/user/stack';
//import { Root } from 'native-base'
//console.disableYellowBox = true;


const AppClass = ()=> {
    return (
      <Provider store={store}>
          <Screen />
      </Provider>
    );
  }

export default AppClass