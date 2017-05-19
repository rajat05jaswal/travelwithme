import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userProfile,loginStatus} from '../actions/index';
import FBSDK from 'react-native-fbsdk';

const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
}=FBSDK;

class TestFacebook extends Component{
  componentWillMount(){
    this.updateUserAccordingToFBQuery();
    AccessToken.getCurrentAccessToken().then(
            (data) => {
              if(data!==null){
                console.log(data);
                
                this.props.navigation.navigate('AfterSignIn')
              }
            } //Refresh it every time
        );
  }
  _responseInfoCallback=(error, result)=>{
    if (error) {
      console.log(error)
      alert('Error fetching data: ' + error.toString());
    } else {
      this.props.updateUser(result);
      this.props.loginStatus(true);
      alert('Success fetching data: ' + result.toString());
    }
  }

  updateUserAccordingToFBQuery=()=>{
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken

        const infoRequest = new GraphRequest(
          '/me',
          {
            accessToken: accessToken,
            parameters: {
              fields: {
                string: 'email,name,first_name,middle_name,last_name'
              }
            }
          },
          this._responseInfoCallback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start()
      }
    )
  }
  render(){
    return(
      <View>
      <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("Error");
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                this.updateUserAccordingToFBQuery();
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}
          />
      </View>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    user:fbReducer,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({updateUser:userProfile,loginStatus:loginStatus},dispatch);
}
export default connect(null,mapDispatchToProps)(TestFacebook);
