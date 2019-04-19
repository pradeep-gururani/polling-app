import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";

export function* addPollOptionRequest(action) {
  let error = null;
  console.log('actions----==',action.payload);
  let url = `${baseUrl}/add_new_option?id=${action.payload.pollId}&option_text=${action.payload.option}`;  
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
    yield put(actions.addPollOptionError({ message: "Error in api request" }));
  } else {
    if (res.data && res.data.error === 1) {
      yield put(actions.addPollOptionError({ message: res.data.message }));
    } else {
      yield put(actions.addPollOptionSuccess());
      yield put(actions.listPollRequest()); //list updated poll
    }
  }
}
