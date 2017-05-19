import React, { Component } from 'react';
import {View,Image,StyleSheet } from 'react-native';

export default class ProfilePicture extends Component {
  
  render() {
    return (
    	<View>
        <Image
          style={[styles.ImageTab]}
          source={require('../../images/profilepic.jpeg')}/>
          </View>
    );
  }
};
const styles = StyleSheet.create({
	ImageTab:{
		marginLeft:20,
		width: 100,
		height: 100,
		borderRadius:144,
		marginTop:40,
	} 

});