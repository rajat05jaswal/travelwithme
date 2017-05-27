import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducer from '../reducers/index';
import {LoginThrough} from '../config/router.js';
import Profile from './Profile.js'

const store = createStore(Reducer);
export default class Main extends Component{
  render(){
    return(
      <Provider store={store}>
        <Profile />
      </Provider>
    )
  }
}
