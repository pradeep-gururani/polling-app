import constants from "./constants";
import {takeLatest} from "redux-saga/effects";
import {signupRequest} from "./signup/action";
import { signupSuccess, signupError } from "./actions";

function* watchActions(){
    yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);
    yield takeLatest(constants.SIGNUP_SUCCESS, signupSuccess);
    yield takeLatest(constants.SIGNUP_ERROR, signupError);

}

export default function* rootSaga(){
    yield watchActions();
}