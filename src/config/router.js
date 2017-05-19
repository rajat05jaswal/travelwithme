import React from 'react';
import {TabNavigator,StackNavigator} from 'react-navigation';
import Profile from '../containers/Profile';
import SignIn from '../containers/SignIn';
import Location from '../containers/Location';

export const Tabs=TabNavigator({
  Profile:{
    screen:Profile,
  },
  Location:{
    screen:Location,
  },
});
export const LoginThrough=StackNavigator({
  SignIn:{
    screen:SignIn,
    navigationOptions: {
      header:null,
    }
  },
  AfterSignIn:{
    screen:Tabs,
    navigationOptions: {
      header:null,
    }
  },
})
