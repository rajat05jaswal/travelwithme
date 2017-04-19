export const updateLocation=(data)=>{
  return{
    type:"Location_Changed_By_GPS",
    payload:data,
  }
}
