import initialState from './initialState';
const fbReducer=(state=initialState(),action)=>{
  switch (action.type) {
    case "USER_DATA_FROM_FB":
      const {name,picture,location}=action.payload;
      return Object.assign({},state,{userProfile:{name:name,picture:picture.data.url,location:location.name}});
      break;
    case "LOGIN_STATUS":
      return Object.assign({},state,{loginStatus:action.payload});
    default:
      return state;
  }
}
export default fbReducer;
