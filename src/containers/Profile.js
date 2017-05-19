import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
class Profile extends Component{
  render(){
    return(
      <View>
      <Text style={styles.name}>Welcome {this.props.user.userProfile.first_name}</Text>
      <Text style={styles.name}>The Awsome {this.props.user.userProfile.last_name}</Text>
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
  name:{
    fontSize:32,
    fontWeight:'bold',
  }
}
export default connect({mapStateToProps})(Profile);
