import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import ProfilePicture from './profilePicture';
import MessageMenu from './messageMenu.js'
import PostMenu from './Post.js'
import PhotoMenu from './photos.js'
import ChatMenu from './chats.js'
import FollowerMenu from './followers.js'
import FavMenu from './favourite.js'
import NotifyMenu from './notify.js'
import VisitMenu from './visits.js'
import SettingMenu from './settings.js'
import InfoMenu from './info.js'
import ProfileIcons from './profileIcons.js'


export default class Profile extends Component {
  
  render() {
    return (
     	<View style={styles.backgroundImage}>
     	<TouchableOpacity>
     	<Image source={require('../../images/profilepic.jpeg')} style={styles.backgroundImage} />
        </TouchableOpacity>	
        <View style={styles.backgroundImageLayer} />
        	<Text style={styles.profileText}>PROFILE</Text>
        	
        	<View style={{flexDirection:'row',position:"absolute"}}>
        		<ProfilePicture/>
        		<InfoMenu/>
       		</View>
      
      		<View style={styles.iconConatiner} >
      			<View style={{flexDirection: 'row'}}>
        			<MessageMenu/>
        			<PostMenu/>
        			<PhotoMenu/>
        		</View>
         		<View style={{flexDirection: 'row'}}>
        			<ChatMenu/>
        			<FollowerMenu/>
        			<FavMenu/>
        		</View>
        		<View style={{flexDirection: 'row'}}>
        			<NotifyMenu/>
        			<VisitMenu/>
        			<SettingMenu/>
                </View>
        	</View>
    </View>
    );
  }
};
const styles = StyleSheet.create({
 backgroundImage:{
 height:(Dimensions).get('window').height,
 width:(Dimensions).get('window').width,
 },
 backgroundImageLayer:{
 	position: "absolute",
    top: 0,
	left: 0,
	backgroundColor: "rgba(0,0,0,0.75)",
	height:(Dimensions).get('window').height,
	width:(Dimensions).get('window').width
 },
  profileText:{
  	fontSize:28,
  	alignItems:'center',
  	marginLeft:20,
  	position:"absolute",
  	color:"white",
  	fontWeight:"bold"
  },
  iconConatiner:{
  	justifyContent:'center',
  	alignItems:'center',
  	marginTop:250,
  	marginLeft:30,
  	position:"absolute"
  }

});

