export const updateLocation=(data)=>{
  return{
    type:"Location_Changed_By_GPS",
    payload:data,
  }
}
export const gpsData=(data)=>{
  return{
    type:"GPS_LAT_LONG",
    payload:data,
  }
}
