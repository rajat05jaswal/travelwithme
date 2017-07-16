import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import {Spinner } from 'native-base';
import firebase from 'firebase';
import FBSDK from 'react-native-fbsdk';
import TestFacebook from './TestFacebook';
import Carousel from './Carousel';
const {
  LoginButton,
  ShareDialog,
} = FBSDK;
export default class SignIn extends Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      error:"",
      loading:false,
    }
  }

  render() {
        return (
              <View style={{flex:1}}>
                <Image source={require('../../images/COVER.jpg')} style={styles.backgroundImage} >
                  <View style={{backgroundColor:'rgba(0,0,0,0.6)',flex:1,paddingTop:50}}>
                    <View style={styles.wrapper}>
                      <Carousel/>
                    </View>
                    <View style={styles.fbLogin}>
                      <TestFacebook navigation={this.props.navigation}/>
                    </View>
                  </View>
                </Image>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
  wrapper:{
    padding:10,
    alignItems:'center',
  },
  label:{
    marginTop:30,
    width:280,
    color:'#fff'
  },
  backgroundImage:{
    flex: 1,
    alignSelf:'stretch',
    height:null,
    width:null,
  },
  fbLogin:{
    alignItems:'center',
  }
});
