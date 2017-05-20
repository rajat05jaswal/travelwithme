import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FollowerMenu extends Component {
   render() {
    return (

       <View style={[styles.FollowerMenu]}>
       <TouchableHighlight onPress={()=>{alert("Pressed Follower");}}>
         <View>
          <Text style={{color:"white",fontWeight:"bold"}}>Follower</Text>
          <Icon name="star" size={50} color="#ffffff" style={{padding:10}} />
        </View>
       </TouchableHighlight>
      </View>


    );
  }
};
const styles = StyleSheet.create({
	FollowerMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
