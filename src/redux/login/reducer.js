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

const handleLoginRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleLoginSuccess = (state, action) => {
  toast.success("User Logged In Successfully!");
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "User Logged In Successfully!" },
    data: { $set: action.payload.tok }
  });
};
const handleLoginError = (state, action) => {
  toast.error(action.payload.message);
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
    [constants.LOGIN_REQUEST]: handleLoginRequest,
    [constants.LOGIN_SUCCESS]: handleLoginSuccess,
    [constants.LOGIN_ERROR]: handleLoginError
  },
  initialState
);
