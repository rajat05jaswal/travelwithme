import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FavMenu extends Component {
   render() {
    return (

      <View style={[styles.FavMenu]}>
       <TouchableHighlight onPress={()=>{alert("Pressed Favourite");}}>
         <View>
          <Text style={{color:"white",fontWeight:"bold"}}>Favourite</Text>
          <Icon name="heart" size={50} color="#ffffff" style={{padding:10}} />
        </View>
       </TouchableHighlight>
      </View>


    );
  }
};
const styles = StyleSheet.create({
	FavMenu:{
		height:(Dimensions).get('window').height/4-60,
    width:(Dimensions).get('window').width/3,
		alignItems:'center',
		borderBottomWidth:1,
		borderColor: '#ffffff',
	} 

});
