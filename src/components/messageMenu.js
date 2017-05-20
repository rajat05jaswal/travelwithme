import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class MessageMenu extends Component {
   render() {
    return (
    	<View style={[styles.MessageTab]}>
    	<TouchableHighlight onPress={()=>{alert("Pressed Messages");}}>
      <View>
           <Text style={{color:"white",fontWeight:"bold"}}>Messages</Text>
           <Icon name="envelope" size={50} color="#ffffff" style={{padding:10}} />
         </View>
    	
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	MessageTab:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',

	} 

});