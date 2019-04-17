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

const handleListPollRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleListPollSuccess = (state, action) =>
  update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "successfully got poll data" },
    data: { $set: action.payload.data }
  });
const handleListPollError = (state, action) => {
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
    [constants.LIST_POLL_REQUEST]: handleListPollRequest,
    [constants.LIST_POLL_SUCCESS]: handleListPollSuccess,
    [constants.LIST_POLL_ERROR]: handleListPollError
  },
  initialState
);
