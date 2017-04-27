import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
// import { Container, Content, Form, Item, Input,Button,Header
//   ,Left,Icon,Body,Title,Right,Label,Toast,Spinner } from 'native-base';
import firebase from 'firebase';
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
              <View style={styles.wrapper}>
                <Text style={{fontSize:20,textAlign:'center',color:'black'}}> Sign In To Continue </Text>
                <View >
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
                <View elevation={10} style={styles.signInButton}>
                  <TouchableOpacity onPress={()=>{this.signInUser.bind(this)}>
                  <Text style={{fontSize:30,color:'white',
                  textAlign:'center',}}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
              </View>
        );
    }
}

const styles = StyleSheet.create({
  // signInSignOutWrapper:{
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginTop:20,
  // },
  // text:{
  //   color:'white',
  // },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
  passwordLabel:{
    marginTop:30,
  },
  textInput:{
    textAlign:'center',
  },
  wrapper:{
    padding:50,
    alignItems:'center',
    flex:1,
  },
  label:{
    marginTop:30,
    width:280,
  },
  signInButton:{
    marginTop:40,
    padding:20,
    width:200,
    borderRadius:50,
    backgroundColor:'#feac00',
  }
});
