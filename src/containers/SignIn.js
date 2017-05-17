import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import {Spinner } from 'native-base';
import firebase from 'firebase';
import FBSDK from 'react-native-fbsdk';
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
  signInUser(){
    const {email,password}=this.state;
    this.setState({loading:true});
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.setState({loading:false});
      alert("SIGNED IN SUCCESFULLY");
    })
    .catch(()=>{
      this.setState({loading:false});
      alert("Invalid");
    })
  }
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyDDFgfKG-kNAEj6pA3haDICD8DwQ0mVIAM",
    authDomain: "travelwithme-1492532761725.firebaseapp.com",
    databaseURL: "https://travelwithme-1492532761725.firebaseio.com",
    projectId: "travelwithme-1492532761725",
    storageBucket: "travelwithme-1492532761725.appspot.com",
    messagingSenderId: "384185060035"
  });
  }
  render() {
        return (
              <View style={{flex:1}}>
                <Image source={require('../../images/COVER.jpg')} style={styles.backgroundImage} >
                  <View style={styles.wrapper}>
                    <Text style={{fontSize:20,textAlign:'center',color:'black'}}> Sign In To Continue
                    </Text>
                    <View>
                      <TextInput
                        placeholder="Email"
                          style={[styles.textInput,styles.label]}
                          onChangeText={(email) => {
                            this.setState({email:email});
                          }}
                          value={this.state.email}
                      />
                    </View>
                    <View>
                      <TextInput
                        placeholder="Password"
                          style={[styles.textInput,styles.label]}
                          onChangeText={(password) => {
                            this.setState({password:password});
                          }}
                          value={this.state.password}
                      />
                    </View>
                    {(!this.state.loading)?
                      <View elevation={10} style={styles.signInButton}>
                        <TouchableOpacity onPress={()=>this.signInUser()}>
                        <Text style={{fontSize:30,color:'white',
                        textAlign:'center',}}>SIGN IN</Text>
                        </TouchableOpacity>
                      </View>
                      :
                      <Spinner/>
                    }
                  </View>
                  <View style={styles.fbLogin}>
                    <LoginButton/>
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
  passwordLabel:{
    marginTop:30,
  },
  textInput:{
    textAlign:'center',
    color:'white',
    fontSize:30,
  },
  wrapper:{
    padding:50,
    alignItems:'center',
  },
  label:{
    marginTop:30,
    width:280,
    color:'#fff'
  },
  signInButton:{
    marginTop:40,
    padding:20,
    width:200,
    borderRadius:50,
    backgroundColor:'#feac00',
  },
  loader:{
    marginTop:40,
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
