import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";

export function* addPollRequest(action) {
  let error = null;
  let url = `${baseUrl}/add_poll?title=${action.payload.title}&options=${action.payload.options}`;
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
    yield put(actions.addPollError({ message: "Error in api request" }));
  } else {
    if (res.data && res.data.error === 1) {
      yield put(actions.addPollError({ message: res.data.message }));
    } else {
      yield put(actions.addPollSuccess());
    }
  }
}
