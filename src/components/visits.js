import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class VisitMenu extends Component {
   render() {
    return (

    	<View style={[styles.VisitMenu]}>
    	<TouchableHighlight>
    	<Text>Visits</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	VisitMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderColor: '#ffffff',
	} 

});
