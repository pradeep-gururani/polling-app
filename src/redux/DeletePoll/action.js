import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";
export function* deletePollRequest(action) {
  let error = null;
  let url = `${baseUrl}/delete_poll?id=${action.payload.poll_id}`;
  const res = yield axios
    .get(url, {
      method: "GET"
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      error = err;
      return err;
    });

  if (error !== null) {
    yield put(actions.deletePollError({ message: "Error in api request" }));
  } else {
    if (res.data && res.data.error === 1) {
      yield put(actions.deletePollError({ message: res.data.data })); //auth failure
    } else {
      yield put(actions.deletePollSuccess()); //auth success
    }
  }
}
