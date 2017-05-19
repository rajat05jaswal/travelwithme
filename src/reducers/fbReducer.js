import initialState from './initialState';
const fbReducer=(state=initialState(),action)=>{
  switch (action.type) {
    case "USER_DATA_FROM_FB":
      const {first_name,id,last_name,name}=action.payload;
      return Object.assign({},state,{userProfile:{first_name:first_name,last_name:last_name}});
      break;
    case "LOGIN_STATUS":
      return Object.assign({},state,{loginStatus:action.payload});
    default:
      return state;
  }
}
export default fbReducer;
