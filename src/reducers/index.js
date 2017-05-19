import {combineReducers} from 'redux';
import locationReducer from './locationReducer';
import fbReducer from './fbReducer';
export default combineReducers({
locationReducer,
fbReducer,
})
