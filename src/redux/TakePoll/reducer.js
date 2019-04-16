import constants from "../constants";
import {handleActions} from "redux-actions";
import update from "immutability-helper";
import { toast } from "react-toastify";


const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
};

const handleTakePollRequest = (state, action)=>
update(state,{
    isLoading: {$set: true},
    isSuccess: {$set: false},
    isError : {$set : false},
    message : {$set : ""}
});

const handleTakePollSuccess = (state, action) =>{
toast.success(action.payload.message);
return update(state,{
    isLoading: {$set: false},
    isSuccess: {$set: true},
    isError : {$set : false},
    message : {$set : "Response Registered Successfully!"},
    data:{$set : ''}   
}
)};


const handleTakePollError = (state, action) => {
toast.error(action.payload.message);    
console.log('pollerrror',action.payload.message);
return update(state, {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError : {$set : true},
    message : {$set : action.payload.message},
    data:{$set : {}}   
}
)}; 


export default handleActions(
    {
      [constants.TAKE_POLL_REQUEST]: handleTakePollRequest,
      [constants.TAKE_POLL_SUCCESS]: handleTakePollSuccess,
      [constants.TAKE_POLL_ERROR]: handleTakePollError
    },
    initialState
  );