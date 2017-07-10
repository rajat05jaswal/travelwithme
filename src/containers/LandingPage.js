import React,{Component} from 'react';
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Geocoder from 'react-native-geocoder';
import RNGooglePlaces from 'react-native-google-places';
import {Calendar} from 'react-native-calendars';

class LandingPage extends Component{
  constructor(props){
    super(props);
    this.state={
      city:"",
      destination:""
    }
    this.onDayPress=this.onDayPress.bind(this);
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props.lat !== nextProps.lat || this.state.city !==nextState.city || this.state.destination !==nextState.destination||this.state.selected !== nextState.selected){
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

  onDayPress(day) {

    this.setState({
      selected: day.dateString
    });
    console.log(this.state.selected);
  }
  render(){
    this.getSource();
    return(
      <ScrollView style={styles.container}>
        <View style={styles.sourceContainer}>
          <Text style={styles.sourceText}>Travelling From </Text>
          <Text>{this.state.city}</Text>
        </View>
        <View style={styles.destinationContainer}>
          <TouchableOpacity
            style={styles.SearchModal}
            onPress={() => this.openSearchModal()}
          >
            <Text style={styles.desinationButton}>Travelling To</Text>
          </TouchableOpacity>

          <Text style={styles.destinationText}>{this.state.destination}</Text>
        </View>
        <View style={styles.calendarWrapper}>
          <Text style={styles.calendarHeaderText}>When you travelling?</Text>
          <Text style={styles.resultText}>{this.state.selected}</Text>
          <Calendar
            onDayPress={this.onDayPress}
            style={styles.calendar}
            hideExtraDays
            markedDates={{[this.state.selected]: {selected: true}}}
          />
        </View>
      </ScrollView>
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
    flex:1
  },
  sourceContainer:{
    justifyContent:'space-around'
  },
  destinationContainer:{
    marginTop:20,
    justifyContent:'space-around'
  },
  sourceText:{
    fontSize:20
  },
  desinationButton:{
    fontSize:20
  },
  destinationText:{
    fontSize:30
  },
  calendarWrapper:{
    marginTop:20
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 450
  },
  calendarHeaderText:{
    fontSize:20
  }
}
export default connect(mapStateToProps,null)(LandingPage);
