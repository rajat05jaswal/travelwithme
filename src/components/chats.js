import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ChatMenu extends Component {
   render() {
    return (

    	<View style={[styles.ChatMenu]}>
       <TouchableHighlight onPress={()=>{alert("Pressed Chats");}}>
         <View>
          <Text style={{color:"white",fontWeight:"bold"}}>Chats</Text>
          <Icon name="comments" size={50} color="#ffffff" style={{padding:10}} />
        </View>
       </TouchableHighlight>
      </View>

    );
  }
};
const styles = StyleSheet.create({
	ChatMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
