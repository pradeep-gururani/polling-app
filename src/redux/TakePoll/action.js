import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions";
import { baseUrl } from "../../config";
const DATASTORE = require("../../services/DataStore");
const GETDATA = require("../../services/GetData");
export function* takePollRequest(action) {
  
  let error = null;
  let pollData = [];
  let voteData = GETDATA('pollData');
  let validVote = true;
  if (voteData.includes(action.payload.poll_id)) {
    validVote = false;
  } else {
    validVote = true;
  }

  if (validVote === false) {
    yield put(
      actions.takePollError({ message: "You have already given this poll..!" })
    );
  } else {
    console.log(
        "action---Poll",
        action.payload.poll_id,
        action.payload.option_text
      );
    let url = `${baseUrl}/do_vote?id=${action.payload.poll_id}&option_text=${
      action.payload.option_text
    }`;
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
      yield put(actions.takePollError({ message: "Error in api request" })); // error in api fire
      console.log("error is--->", error);
    } else {
      if (res.data && res.data.error === 1) {
        yield put(actions.takePollError({ message: res.data.error })); //poll failure
      } else {
        pollData.push(action.payload.poll_id);
        DATASTORE('pollData',pollData); //store to localstorage
        yield put(
          actions.takePollSuccess({
            message: "Successfully recorded response!"
          })
        ); //auth success
      }
    }
  }
}
