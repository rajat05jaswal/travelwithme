import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class NotifyMenu extends Component {
   render() {
    return (

    	<View style={[styles.NotifyMenu]}>
    	<TouchableHighlight>
    	<Text>Notifications</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	NotifyMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderColor: '#ffffff',
	} 

});
