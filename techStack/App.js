import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Header} from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View  >
          <Header headerText="Tech Stacki" />
          <LibraryList />
        </View> 
      </Provider>
    );
  }
}

