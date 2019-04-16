import {createAction} from "redux-actions";
import constants from "./constants";

export const signupRequest = createAction(constants.SIGNUP_REQUEST);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);
export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);
export const listPollRequest = createAction(constants.LIST_POLL_REQUEST);
export const listPollSuccess = createAction(constants.LIST_POLL_SUCCESS);
export const listPollError = createAction(constants.LIST_POLL_ERROR);
export const takePollRequest = createAction(constants.TAKE_POLL_REQUEST);
export const takePollSuccess = createAction(constants.TAKE_POLL_SUCCESS);
export const takePollError = createAction(constants.TAKE_POLL_ERROR);
export const logOut = createAction(constants.LOG_OUT);