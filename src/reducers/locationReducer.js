const initialState={
  lat:18.5204,
  long:73.8567,
}
const locationReducer=(state=initialState,action)=>{
  switch(action.type){
    case "Location_Changed_By_GPS":{
      return Object.assign({},state,{lat:action.payload.latitude,long:action.payload.longitude});
    }
    default:{
      return state;
    }
  }
}
export default locationReducer;
