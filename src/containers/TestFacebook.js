import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userProfile} from '../actions/index';
import FBSDK from 'react-native-fbsdk';

const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
}=FBSDK;

class TestFacebook extends Component{
  _responseInfoCallback=(error, result)=>{
    if (error) {
      console.log(error)
      alert('Error fetching data: ' + error.toString());
    } else {
      this.props.updateUser(result);
      alert('Success fetching data: ' + result.toString());
      this.props.navigator.push({
        id:"Profile"
      })
    }
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
            }
          }
          onLogoutFinished={() => alert("logout.")}
          />
      </View>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({updateUser:userProfile},dispatch);
}
export default connect(null,mapDispatchToProps)(TestFacebook);
