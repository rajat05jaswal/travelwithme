import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class PhotoMenu extends Component {
   render() {
    return (
    	<View style={[styles.PhotoTab]}>
    	<TouchableHighlight  onPress={()=>{alert("Pressed Pictures");}}>
        <View>
    	     <Text style={{color:"white",fontWeight:"bold"}}>Pictures</Text>
           <Icon name="photo" size={50} color="#ffffff" style={{padding:10}} />
    	   </View>
      </TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	PhotoTab:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderBottomWidth:1,
		borderColor: '#ffffff'
	} 

});