import constants from "../constants";
import {handleActions} from "redux-actions";
import update from "immutability-helper";
const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
};

const handleSignupRequest = (state, action)=>
update(state,{
    isLoading: {$set: true},
    isSuccess: {$set: false},
    isError : {$set : false},
    message : {$set : ""}

});


export default handleActions(
    {
      [constants.SIGNUP_REQUEST]: handleSignupRequest
    },
    initialState
  );