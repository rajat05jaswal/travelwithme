import React,{Component} from 'react';
import {View,Navigator,BackAndroid} from 'react-native';
import SignIn from './SignIn';
import Profile from './Profile';
import Location from './Location';

export default class MainNavigator extends Component{
  navigatorRenderScene(route,navigator){
        _navigator=navigator;
        BackAndroid.addEventListener('hardwareBackPress', () => {
        if (_navigator.getCurrentRoutes().length === 1  ) {
           return false;
        }
        _navigator.pop();
        return true;
      });
        switch(route.id){
          case "SignIn":
           return (<SignIn navigator={navigator} title="Login Page"/>);

          case "Profile":
          return (<Profile navigator={navigator} title="Profile Page"/>);

          case "Location":
          return(<Location navigator={navigator} title="Location Page"/>)
      }
    }
  render(){
    return(
      <Navigator
        style={{flex:1}}
          initialRoute ={{id:"SignIn"}}
          renderScene={
            this.navigatorRenderScene
          }
      />
    )
  }
}
