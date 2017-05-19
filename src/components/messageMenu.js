import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class MessageMenu extends Component {
   render() {
    return (
    	<View style={[styles.MessageTab]}>
    	<TouchableHighlight>
    	<Text>Message</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	MessageTab:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff'
	} 

});