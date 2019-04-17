import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";
export function* listUsersRequest(action) {
  let error = null;
  let url = `${baseUrl}/list_users`;
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
    yield put(actions.listUsersError({ message: "Error in api request" }));
  } else {
    yield put(actions.listUsersSuccess({ data: res.data }));
  }
}
