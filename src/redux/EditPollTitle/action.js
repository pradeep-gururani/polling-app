import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";
export function* editPollTitleRequest(action) {    
  let error = null;
  let url = `${baseUrl}/update_poll_title?id=${action.payload.pollId}&title=${ action.payload.title}`;
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
      yield put(actions.editPollTitleSuccess()); //edit poll title success
      yield put(actions.listPollRequest());//list updated polls
    }
  }
}
