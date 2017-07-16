import React, { Component } from 'react';
import {View,Image,StyleSheet,Dimensions } from 'react-native';

export default class ProfilePicture extends Component {

  render() {
    return (
    	<View>
        <Image
          style={[styles.ImageTab]}
          source={{uri:this.props.picture}}
        />
      </View>
    );
  }
};
const styles = StyleSheet.create({
	ImageTab:{
		marginLeft:20,
    height:(Dimensions).get('window').height/3-90,
    width:(Dimensions).get('window').width/2-60,
    borderRadius:144,
    marginTop:80,
	}

});
