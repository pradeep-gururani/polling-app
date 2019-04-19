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

const handleEditPollTitleRequest = (state, action) =>
  update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isError: { $set: false },
    message: { $set: "" }
  });

const handleEditPollTitleSuccess = (state, action) =>{      
    toast.success("Poll title edited Successfully..!");
    return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isError: { $set: false },
    message: { $set: "Poll title edited Successfully..!" },
}
)};
const handleEditPollTitleError = (state, action) => {
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
    [constants.EDIT_POLL_TITLE_REQUEST]: handleEditPollTitleRequest,
    [constants.EDIT_POLL_TITLE_SUCCESS]: handleEditPollTitleSuccess,
    [constants.EDIT_POLL_TITLE_ERROR]: handleEditPollTitleError
  },
  initialState
);
