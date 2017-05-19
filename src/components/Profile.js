import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,Dimensions } from 'react-native';
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


export default class Profile extends Component {
  
  render() {
    return (


     <View>
     	<Image source={require('../../images/red.jpg')} style={styles.backgroundImage} >
        	<Text style={{fontSize:35,alignItems:'center',marginLeft:20}}>Profile</Text>
        	<View style={{flexDirection:'row'}}>
        		<ProfilePicture/>
        		<InfoMenu/>
       		</View>
      
      		<View style={{justifyContent:'center',alignItems:'center',marginTop:40}} >
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
        </Image>
    </View>
    );
  }
};
const styles = StyleSheet.create({
  backgroundImage:{
    height:(Dimensions).get('window').height,
    width:(Dimensions).get('window').width,

  }
});

