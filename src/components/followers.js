import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class FollowerMenu extends Component {
   render() {
    return (

    	<View style={[styles.FollowerMenu]}>
    	<TouchableHighlight>
    	<Text>Followers</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	FollowerMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
