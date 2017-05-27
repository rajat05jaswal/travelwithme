import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SettingMenu extends Component {
   render() {
    return (

    	<View style={[styles.SettingMenu]}>
    	 <TouchableHighlight onPress={()=>{alert("Pressed Setting");}}>
    	   <View>
          <Text style={{color:"white",fontWeight:"bold"}}>Settings</Text>
          <Icon name="gear" size={50} color="#ffffff" style={{padding:10}} />
        </View>
    	 </TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	SettingMenu:{
		height:(Dimensions).get('window').height/4-60,
    width:(Dimensions).get('window').width/3,
		alignItems:'center',
		borderColor: '#ffffff',
	} 

});
