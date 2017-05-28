import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';
import Geocoder from 'react-native-geocoder';

class LandingPage extends Component{
  constructor(props){
    super(props);
    this.state={
      city:"",
    }
  }
  getSource=()=>{
    const x = {
      lat: this.props.lat,
      lng: this.props.long
    };

    Geocoder.geocodePosition(x)
    .then(res=>{
      this.setState({city:res[0].subAdminArea})
      console.log(res[0].subAdminArea);
    })
    .catch(err=>{
      console.log(err);
    })

  }
  render(){
    return(
      <View>
        {this.getSource()}
        <Text>CITY : {this.state.city}</Text>
      </View>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    lat:state.locationReducer.region.latitude,
    long:state.locationReducer.region.longitude
  }
}
export default connect(mapStateToProps,null)(LandingPage);
