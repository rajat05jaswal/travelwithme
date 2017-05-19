import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class ChatMenu extends Component {
   render() {
    return (

    	<View style={[styles.ChatMenu]}>
    	<TouchableHighlight>
    	<Text>Chat</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	ChatMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
