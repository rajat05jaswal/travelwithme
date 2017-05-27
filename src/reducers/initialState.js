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
          name:"Himanshu Mahajan",
          picture:"",
          location:"Delhi"
        },
        loginStatus:false,
    }
  )
}
export default initialState;
