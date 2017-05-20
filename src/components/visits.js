import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight,Dimensions  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VisitMenu extends Component {
   render() {
    return (

    	<View style={[styles.VisitMenu]}>
       <TouchableHighlight onPress={()=>{alert("Pressed Visits");}}>
         <View>
          <Text style={{color:"white",fontWeight:"bold",alignItems:"center"}}>Visits</Text>
          <Icon name="globe" size={50} color="#ffffff" style={{padding:10}} />
        </View>
       </TouchableHighlight>
      </View>

    );
  }
};
const styles = StyleSheet.create({
	VisitMenu:{
		height:(Dimensions).get('window').height/4-60,
    width:(Dimensions).get('window').width/3,
		alignItems:'center',
		borderRightWidth:1,
		borderColor: '#ffffff',
	} 

});
