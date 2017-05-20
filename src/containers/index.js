import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducer from '../reducers/index';
import SignIn from './SignIn';
import TestFacebook from './TestFacebook.js';
import Profile from '../components/Profile';

const store = createStore(Reducer);
export default class Main extends Component{
  render(){
    return(
      <Provider store={store}>
        <SignIn />
      </Provider>
    )
  }
}
