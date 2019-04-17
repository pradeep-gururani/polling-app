import constants from "../constants";
import { handleActions } from "redux-actions";
import update from "immutability-helper";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  data: {}
};

const handleListUsersRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleListUsersSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "successfully got users data" },
    data: { $set: action.payload.data }
  });
const handleListUsersError = (state, action) => {
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
    [constants.LIST_USERS_REQUEST]: handleListUsersRequest,
    [constants.LIST_USERS_SUCCESS]: handleListUsersSuccess,
    [constants.LIST_USERS_ERROR]: handleListUsersError
  },
  initialState
);
