import React from 'react';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';
import Profile from '../containers/Profile';
import SignIn from '../containers/SignIn';
import Location from '../containers/Location';
import LandingPage from '../containers/LandingPage';

export const Tabs=TabNavigator({
  Profile:{
    screen:Profile,
  },
  Location:{
    screen:Location,
  },
  LandingPage:{
    screen:LandingPage,
  }
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
