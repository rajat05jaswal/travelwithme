import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class SettingMenu extends Component {
   render() {
    return (

    	<View style={[styles.SettingMenu]}>
    	<TouchableHighlight>
    	<Text>Settings</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	SettingMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderColor: '#ffffff',
	} 

});
