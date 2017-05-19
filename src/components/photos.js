import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class PhotoMenu extends Component {
   render() {
    return (
    	<View style={[styles.PhotoTab]}>
    	<TouchableHighlight>
    	<Text>Pictures</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	PhotoTab:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderBottomWidth:1,
		borderColor: '#ffffff'
	} 

});