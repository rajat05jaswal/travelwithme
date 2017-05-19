const initialState=()=>{
  return(
    {
        gps:{
          lat:0,
          long:0,
        },
        region:{
          longitudeDelta: 0.00856,
          latitudeDelta: 0.01398,
          longitude: 73.8567,
          latitude: 18.5204,
        },
        userProfile:{
          first_name:"Himanshu",
          last_name:"Mahajan",
        }
    }
  )
}
export default initialState;
