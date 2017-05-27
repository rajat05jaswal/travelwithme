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
  GraphRequestManager,
  LoginManager
}=FBSDK;

class TestFacebook extends Component{
  componentWillMount(){
    this.updateUserAccordingToFBQuery();
  }
  _responseInfoCallback=(error, result)=>{
    if (error) {
      console.log(error)
      alert('Error fetching data: ' + error.toString());
    } else {
      this.props.updateUser(result);
      this.props.loginStatus(true);
      this.props.navigation.navigate('AfterSignIn')
      console.log(result);
    }
  }

  updateUserAccordingToFBQuery=()=>{
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken
        console.log(accessToken);
        const infoRequest = new GraphRequest(
          '/me',
          {
            accessToken: accessToken,
            parameters: {
              fields: {
                string: 'name,location,picture.height(700).width(700)'
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
          publishPermissions={["publish_actions,user_location"]}
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
