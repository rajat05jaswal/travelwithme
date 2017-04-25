import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import { Container, Content, Form, Item, Input,Button,Header
  ,Left,Icon,Body,Title,Right,Label,Toast,Spinner } from 'native-base';
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
            <Image source={require('../../images/solo-traveller.jpg')} style={styles.backgroundImage}>
              <Container>
                  <Header>
                      <Left>
                          <Button transparent>
                              <Icon name='menu' />
                          </Button>
                      </Left>
                      <Body>
                          <Title>Sign In</Title>
                      </Body>
                      <Right />
                  </Header>
                  <Content padder>
                      <Form>
                          <Item floatingLabel>
                              <Label>Email</Label>
                              <Input
                              onChangeText={(email) => this.setState({email})}
                              value={this.state.email}
                              />
                          </Item>
                          <Item floatingLabel last>
                              <Label>Password</Label>
                              <Input
                              onChangeText={(password) => this.setState({password})}
                              value={this.state.password}
                              secureTextEntry={true}
                              />
                          </Item>
                          <View style={styles.signInSignOutWrapper}>
                              {this.state.loading?
                                <Spinner
                                style={{marginLeft:20}}
                                />
                                :
                                <Button rounded large onPress={this.signInUser.bind(this)}>
                                  <Text style={styles.text}>Sign In </Text>
                                </Button>
                              }
                              <Button rounded large>
                                <Text style={styles.text}>Sign Up </Text>
                              </Button>
                          </View>
                      </Form>

                  </Content>
              </Container>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
  signInSignOutWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
  },
  text:{
    color:'white',
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  }
});
