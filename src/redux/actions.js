import {createAction} from "redux";
import constants from "./constants";

export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.SIGNUP_SUCCESS);
export const loginError = createAction(constants.SIGNUP_ERROR);

