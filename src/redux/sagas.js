import constants from "./constants";
import { takeLatest } from "redux-saga/effects";
import { signupRequest } from "./signup/action";
import {
  signupSuccess,
  signupError,
  loginError,
  loginSuccess,
  listPollSuccess,
  listPollError,
  takePollSuccess,
  takePollError,
  logOut,
  listUsersSuccess,
  listUsersError,
  deletePollSuccess,
  deletePollError,
  addPollSuccess,
  addPollError
} from "./actions";
import { loginRequest } from "./login/action";
import { listPollRequest } from "./ListPoll/action";
import { takePollRequest } from "./TakePoll/action";
import {listUsersRequest} from './ListUsers/action';
import {deletePollRequest} from './DeletePoll/action';
import { addPollRequest } from "./AddPoll/action";
function* watchActions() {
  yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);//signup
  yield takeLatest(constants.SIGNUP_SUCCESS, signupSuccess);
  yield takeLatest(constants.SIGNUP_ERROR, signupError);
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);//login
  yield takeLatest(constants.LOGIN_ERROR, loginError);
  yield takeLatest(constants.LOGIN_SUCCESS, loginSuccess);
  yield takeLatest(constants.LIST_POLL_REQUEST, listPollRequest);//listpoll
  yield takeLatest(constants.LIST_POLL_SUCCESS, listPollSuccess);
  yield takeLatest(constants.LIST_POLL_ERROR, listPollError);
  yield takeLatest(constants.TAKE_POLL_REQUEST, takePollRequest);//take poll
  yield takeLatest(constants.TAKE_POLL_SUCCESS, takePollSuccess);
  yield takeLatest(constants.TAKE_POLL_ERROR, takePollError);
  yield takeLatest(constants.ADD_POLL_REQUEST,addPollRequest);
  yield takeLatest(constants.ADD_POLL_SUCCESS,addPollSuccess);
  yield takeLatest(constants.ADD_POLL_ERROR,addPollError);
  yield takeLatest(constants.DELETE_POLL_REQUEST, deletePollRequest);///delete poll
  yield takeLatest(constants.DELETE_POLL_SUCCESS,deletePollSuccess);
  yield takeLatest(constants.DELETE_POLL_ERROR,deletePollError);
  yield takeLatest(constants.LOG_OUT, logOut);        //logout
  yield takeLatest(constants.LIST_USERS_REQUEST,listUsersRequest);//list users
  yield takeLatest(constants.LIST_USERS_SUCCESS,listUsersSuccess);
  yield takeLatest(constants.LIST_USERS_ERROR,listUsersError);


}

export default function* rootSaga() {
  yield watchActions();
}
