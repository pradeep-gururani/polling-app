import {createAction} from "redux-actions";
import constants from "./constants";

export const signupRequest = createAction(constants.SIGNUP_REQUEST);//signup
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);
export const loginRequest = createAction(constants.LOGIN_REQUEST);//login
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);
export const listPollRequest = createAction(constants.LIST_POLL_REQUEST);//listpoll
export const listPollSuccess = createAction(constants.LIST_POLL_SUCCESS);
export const listPollError = createAction(constants.LIST_POLL_ERROR);
export const takePollRequest = createAction(constants.TAKE_POLL_REQUEST);//takepoll
export const takePollSuccess = createAction(constants.TAKE_POLL_SUCCESS);
export const takePollError = createAction(constants.TAKE_POLL_ERROR);
export const logOut = createAction(constants.LOG_OUT);                  //logout
export const addPollRequest = createAction(constants.ADD_POLL_REQUEST);//add poll
export const addPollSuccess = createAction(constants.ADD_POLL_SUCCESS);
export const addPollError = createAction(constants.ADD_POLL_ERROR);
export const deletePollRequest = createAction(constants.DELETE_POLL_REQUEST);//deletepoll
export const deletePollSuccess = createAction(constants.DELETE_POLL_SUCCESS);
export const deletePollError = createAction(constants.DELETE_POLL_ERROR);
export const addPollOptionRequest = createAction(constants.ADD_POLL_OPTION_REQUEST);//add poll option
export const addPollOptionSuccess = createAction(constants.ADD_POLL_OPTION_SUCCESS);
export const addPollOptionError = createAction(constants.ADD_POLL_OPTION_ERROR);
export const editPollTitleRequest = createAction(constants.EDIT_POLL_TITLE_REQUEST); //edit poll title
export const editPollTitleSuccess = createAction(constants.EDIT_POLL_TITLE_SUCCESS);
export const editPollTitleError = createAction(constants.EDIT_POLL_TITLE_ERROR);
export const deletePollOptionRequest = createAction(constants.DELETE_POLL_OPTION_REQUEST);//delete poll option
export const deletePollOptionSuccess = createAction(constants.DELETE_POLL_OPTION_SUCCESS);
export const deletePollOptionError = createAction(constants.DELETE_POLL_OPTION_ERROR);
export const listUsersRequest = createAction(constants.LIST_USERS_REQUEST);//list user
export const listUsersSuccess = createAction(constants.LIST_USERS_SUCCESS);
export const listUsersError = createAction(constants.LIST_USERS_ERROR);

