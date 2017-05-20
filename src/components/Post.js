import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PostMenu extends Component {
   render() {
    return (

    	<View style={[styles.PostTab]}>
    	<TouchableHighlight  onPress={()=>{alert("Pressed Posts");}}>
    	<View>
           <Text style={{color:"white",fontWeight:"bold"}}>Posts</Text>
           <Icon name="edit" size={50} color="#ffffff" style={{padding:10}} />
         </View>
    	</TouchableHighlight>
    	</View>

    );
  }
};
const styles = StyleSheet.create({
	PostTab:{
		height:(Dimensions).get('window').height/4-60,
    width:(Dimensions).get('window').width/3,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	}

});
