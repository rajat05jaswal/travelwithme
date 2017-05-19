import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class FavMenu extends Component {
   render() {
    return (

    	<View style={[styles.FavMenu]}>
    	<TouchableHighlight>
    	<Text>Favourites</Text>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	FavMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
