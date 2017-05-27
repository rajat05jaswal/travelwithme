import initialState from './initialState';
const fbReducer=(state=initialState(),action)=>{
  switch (action.type) {
    case "USER_DATA_FROM_FB":
      const {name,picture,location}=action.payload;
      const loc="";
      if(location===undefined){
        loc="Pune";
      }
      else{
        loc=location.name;
      }
      return Object.assign({},state,{userProfile:{name:name,picture:picture.data.url,location:loc}});
      break;
    case "LOGIN_STATUS":
      return Object.assign({},state,{loginStatus:action.payload});
    default:
      return state;
  }
}
export default fbReducer;
