import React,{Component} from 'react';
import { AppRegistry, View,Image,Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import ProfilePicture from '../components/profilePicture';
import MessageMenu from '../components/messageMenu.js'
import PostMenu from '../components/Post.js'
import PhotoMenu from '../components/photos.js'
import ChatMenu from '../components/chats.js'
import FollowerMenu from '../components/followers.js'
import FavMenu from '../components/favourite.js'
import NotifyMenu from '../components/notify.js'
import VisitMenu from '../components/visits.js'
import SettingMenu from '../components/settings.js'
import InfoMenu from '../components/info.js'
import {connect} from 'react-redux';
class Profile extends Component{
  render(){
    return(
      <View style={styles.backgroundImage}>
     	<TouchableOpacity>
     	<Image source={{uri:this.props.user.userProfile.picture}} style={styles.backgroundImage} />
        </TouchableOpacity>
        <View style={styles.backgroundImageLayer} />
        	<Text style={styles.profileText}>PROFILE</Text>

        	<View style={{flexDirection:'row',position:"absolute"}}>
        		<ProfilePicture picture={this.props.user.userProfile.picture}/>
        		<InfoMenu info={this.props.user.userProfile}/>
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

    )
  }
}
const mapStateToProps=(state)=>{
  return{
    user:state.fbReducer
  }
}
const styles={
  backgroundImage:{
  height:(Dimensions).get('window').height,
  width:(Dimensions).get('window').width,
  },
  backgroundImageLayer:{
  	position: "absolute",
     top: 0,
 	left: 0,
 	backgroundColor: "rgba(0,0,0,0.50)",
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
    marginTop:(Dimensions).get('window').width/2+80,   	
    position:"absolute"
   }

}
export default connect(mapStateToProps)(Profile);

// <View>
// <Text style={styles.name}>Welcome {this.props.user.userProfile.first_name}</Text>
// <Text style={styles.name}>The Awsome {this.props.user.userProfile.last_name}</Text>
// </View>
