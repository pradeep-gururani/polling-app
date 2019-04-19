import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
// import { baseUrl } from "../../config";
export function* editPollTitleRequest(action) {
    console.log('poll-id',action.payload.pollId);
  let error = null;
//   let url = `${baseUrl}/update_poll_title?id=${}&title=${}`;
  let url ='';
  const res = yield axios
    .get(url, {
      method: "POST"
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      error = err;
      return err;
    });

  if (error !== null) {
    yield put(actions.editPollTitleError({ message: "Error in api request" }));
  } else {
    if (res.data && res.data.error === 1) {
      yield put(actions.editPollTitleError({ message: res.data.data })); //deletion failure
    } else {
      yield put(actions.editPollTitleSuccess()); //deletion success
      yield put(actions.listPollRequest());//list updated polls
    }
  }
}
