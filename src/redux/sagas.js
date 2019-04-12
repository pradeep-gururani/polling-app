import constants from "./constants";
import {takeLatest} from "redux-saga/effects";
import {signupRequest} from "./signup/action";

function* watchActions(){
    yield takeLatest(constants.SIGNUP_REQUEST, signupRequest);

}

export default function* rootSaga(){
    yield watchActions();
}