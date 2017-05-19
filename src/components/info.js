import React, { Component } from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';

export default class InfoMenu extends Component {
  
  render() {
    return (
    	<View style={[styles.InfoMenu]}>
        <Text style={[styles.InfoText]}>Srishti Maheshwari</Text>
        <Text style={[styles.InfoText]}>Jaipur, India</Text>
          </View>
    );
  }
};
const styles = StyleSheet.create({
	InfoMenu:{
		marginLeft:20,
		marginTop:40,
	},
  InfoText:{
    fontSize:25
  } 

});