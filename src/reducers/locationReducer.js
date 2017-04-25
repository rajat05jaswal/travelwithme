const initialState={
  gps:{
    lat:0,
    long:0,
  },
  region:{
    longitudeDelta: 0.00856,
    latitudeDelta: 0.01398,
    longitude: 73.8567,
    latitude: 18.5204,
  }
}
const locationReducer=(state=initialState,action)=>{
  switch(action.type){
    case "Location_Changed_By_GPS":{
      const longDel=action.payload.longitudeDelta;
      const latDel=action.payload.latitudeDelta;
      if(longDel===undefined ||latDel===undefined){
        longDel=state.region.longitudeDelta;
        latDel=state.region.latitudeDelta;
      }
      return Object.assign({},state,{region:
        {
          longitudeDelta:longDel,
          latitudeDelta:latDel,
          longitude:action.payload.longitude,
          latitude:action.payload.latitude,}
      });
    }
    case "GPS_LAT_LONG":{
      return Object.assign({},state,{gps:{lat:action.payload.latitude,long:action.payload.longitude}})
    }
    default:{
      return state;
    }
  }
}
export default locationReducer;
