import constants from "./constants";
import {takeLatest} from "redux-saga/effects";
import {signupRequest} from "./signup/action";
import { signupSuccess, signupError, loginError, loginSuccess, listPollSuccess, listPollError } from "./actions";
import { loginRequest } from "./login/action";
import { listPollRequest} from "./ListPoll/action";

function* watchActions(){
    yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
    yield takeLatest(constants.SIGNUP_SUCCESS, signupSuccess);
    yield takeLatest(constants.SIGNUP_ERROR, signupError);
    yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
    yield takeLatest(constants.LOGIN_ERROR, loginError);
    yield takeLatest(constants.LOGIN_SUCCESS, loginSuccess);
    yield takeLatest(constants.LIST_POLL_REQUEST, listPollRequest);
    yield takeLatest(constants.LIST_POLL_SUCCESS, listPollSuccess);
    yield takeLatest(constants.LIST_POLL_ERROR, listPollError);
}

export default function* rootSaga(){
    yield watchActions();
}