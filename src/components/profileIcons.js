import React, { Component } from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,TouchableHighlight  } from 'react-native';

export default class ProfileIcons extends Component {
   render() {
    return (

      <View>
    	<View style={[styles.VisitMenu]}>
    	 <Text>Visits</Text>
    	</View>
      <View style={[styles.SettingMenu]}>
        <TouchableHighlight>
          <Text>Settings</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.NotifyMenu]}>
        <TouchableHighlight>
          <Text>Notifications</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.FavMenu]}>
        <TouchableHighlight>
          <Text>Favourites</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.FollowerMenu]}>
        <TouchableHighlight>
          <Text>Followers</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.ChatMenu]}>
        <TouchableHighlight>
          <Text>Chat</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.PostTab]}>
        <TouchableHighlight>
          <Text>Post</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.MessageTab]}>
        <TouchableHighlight>
          <Text>Message</Text>
        </TouchableHighlight>
      </View>
      <View style={[styles.PhotoTab]}>
        <TouchableHighlight>
          <Text>Pictures</Text>
        </TouchableHighlight>
      </View>
    </View>


    );
  }
};
const styles = StyleSheet.create({
	VisitMenu:{
		width: 100,
		height: 100,
		alignItems:'center',
		borderRightWidth:1,
		borderColor: '#ffffff',
	},
    SettingMenu:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderColor: '#ffffff',
  },
  NotifyMenu:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderRightWidth:1,
    borderColor: '#ffffff',
  },
  FavMenu:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor: '#ffffff',
  },  
  FollowerMenu:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor: '#ffffff',
  },
  ChatMenu:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor: '#ffffff',
  },
  PostTab:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor: '#ffffff',
  },
  MessageTab:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderRightWidth:1,
    borderBottomWidth:1,
    borderColor: '#ffffff'
  }, 
  PhotoTab:{
    width: 100,
    height: 100,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor: '#ffffff'
  } 
});
