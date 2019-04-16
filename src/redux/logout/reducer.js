import constants from "../constants";
import {handleActions} from "redux-actions";
// import {update} from 'immutability-helper';
const initialState = {};

const handleLogout = (state, action) => {   
return {};
} 


export default handleActions(
    {
      [constants.LOG_OUT]: handleLogout
    
    },
    initialState
  );