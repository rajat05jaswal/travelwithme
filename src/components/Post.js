import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class PostMenu extends Component {
   render() {
    return (

    	<View style={[styles.PostTab]}>
    	<TouchableHighlight>
    	<Text>Post</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	PostTab:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
