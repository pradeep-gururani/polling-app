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

const handleDeletePollRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleDeletePollSuccess = (state, action) =>{      
    toast.success("Poll deleted Successfully..!");
    return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "Poll deleted Successfully..!" },
}
)};
const handleDeletePollError = (state, action) => {
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
    [constants.DELETE_POLL_REQUEST]: handleDeletePollRequest,
    [constants.DELETE_POLL_SUCCESS]: handleDeletePollSuccess,
    [constants.DELETE_POLL_ERROR]: handleDeletePollError
  },
  initialState
);
