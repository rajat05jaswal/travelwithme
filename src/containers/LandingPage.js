import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Geocoder from 'react-native-geocoder';
import RNGooglePlaces from 'react-native-google-places';

class LandingPage extends Component{
  constructor(props){
    super(props);
    this.state={
      city:"",
      destination:""
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props.lat !== nextProps.lat || this.state.city !==nextState.city || this.state.destination !==nextState.destination){
      return true;
    }
    else{
      return false;
    }
  }

  getSource=()=>{
    const x = {
      lat: this.props.lat,
      lng: this.props.long
    };
    console.log(x)
    Geocoder.geocodePosition(x)
    .then(res=>{
      this.setState({city:res[0].subAdminArea})
      console.log(res[0].subAdminArea);
    })
    .catch(err=>{
      console.log(err);
    })

  }
  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      useOverlay :false
    })
    .then((place) => {

        console.log(place);
        this.setState({destination:place.name});
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }
  render(){
    console.log(RNGooglePlaces);
    this.getSource();
    return(
      <View style={styles.container}>
        <Text style={styles.sourceText}>CITY : {this.state.city}</Text>
        <View>
        <TouchableOpacity
          onPress={() => this.openSearchModal()}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.destinationText}>{this.state.destination}</Text>
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
const styles={
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  sourceText:{
    fontSize:30
  },
  destinationText:{
    fontSize:30
  }
}
export default connect(mapStateToProps,null)(LandingPage);
