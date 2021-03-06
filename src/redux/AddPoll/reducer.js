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

const handleAddPollRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleAddPollSuccess = (state, action) => {
  toast.success("Poll Added Successfully!");
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "Poll Added Successfully!" }
    // data:{$set : action.payload.data.data}
  });
};
const handleAddPollError = (state, action) => {
  toast.error(action.payload.message);
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isError: { $set: true },
    message: { $set: action.payload.message }
  });
};

export default handleActions(
  {
    [constants.ADD_POLL_REQUEST]: handleAddPollRequest,
    [constants.ADD_POLL_SUCCESS]: handleAddPollSuccess,
    [constants.ADD_POLL_ERROR]: handleAddPollError
  },
  initialState
);
