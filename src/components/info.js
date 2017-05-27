import React, { Component } from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';

export default class InfoMenu extends Component {

  render() {
    return (
    	<View style={[styles.InfoMenu]}>
        <Text style={[styles.InfoText]}>{this.props.info.name}</Text>
        <Text style={[styles.InfoText]}>{this.props.info.location}</Text>
          </View>
    );
  }
};
const styles = StyleSheet.create({
	InfoMenu:{
		marginLeft:20,
		marginTop:80,
	},
  InfoText:{
    fontSize:25,
    color:"white",
    fontWeight:"bold"
  }

});
