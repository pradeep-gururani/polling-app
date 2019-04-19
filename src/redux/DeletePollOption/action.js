import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";
export function* deletePollOptionRequest(action) {
    console.log('poll-id',action.payload.pollId, action.payload.text);
  let error = null;
  let url = `${baseUrl}/delete_poll_option?id=${action.payload.pollId}&option_text=${action.payload.text}`;
  // let url ='';
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
    yield put(actions.deletePollOptionError({ message: "Error in api request" }));
    console.log('error---nll',error);
  } else {
    if (res.data && res.data.error === 1) {
      console.log('error',res.data.error);
      yield put(actions.deletePollOptionError({ message: res.data.data })); //deletion failure
    } else {
      yield put(actions.deletePollOptionSuccess()); //deletion success
      yield put(actions.listPollRequest());//list updated polls
    }
  }
}
