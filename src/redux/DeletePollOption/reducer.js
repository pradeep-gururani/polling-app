import constants from "../constants";
import { handleActions } from "redux-actions";
import update from "immutability-helper";
import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  data: {}
};

const handleDeletePollOptionRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleDeletePollOptionSuccess = (state, action) =>{      
    toast.success("Poll option deleted Successfully..!");
    return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "Poll option deleted Successfully..!" },
}
)};
const handleDeletePollOptionError = (state, action) => {
  toast.error(action.payload.messsage);  
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload.message },
    data: { $set: {} }
  });
};

export default handleActions(
  {
    [constants.DELETE_POLL_OPTION_REQUEST]: handleDeletePollOptionRequest,
    [constants.DELETE_POLL_OPTION_SUCCESS]: handleDeletePollOptionSuccess,
    [constants.DELETE_POLL_OPTION_ERROR]: handleDeletePollOptionError
  },
  initialState
);
