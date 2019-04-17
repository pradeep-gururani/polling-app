import constants from "../constants";
import { handleActions } from "redux-actions";
// import {update} from 'immutability-helper';
const REMOVEDATA = require("../../services/RemoveData");
const initialState = {};

const handleLogout = (state, action) => {
  REMOVEDATA("loginData");
  return {};
};

export default handleActions(
  {
    [constants.LOG_OUT]: handleLogout
  },
  initialState
);
