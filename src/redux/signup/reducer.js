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

const handleSignupRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleSignupSuccess = (state, action) => {
  toast.success("User Added Successfully!");
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "User Added Successfully!" }
    // data:{$set : action.payload.data.data}
  });
};
const handleSignupError = (state, action) => {
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
    [constants.SIGNUP_REQUEST]: handleSignupRequest,
    [constants.SIGNUP_SUCCESS]: handleSignupSuccess,
    [constants.SIGNUP_ERROR]: handleSignupError
  },
  initialState
);
