import {combineReducers} from "redux";
import signup from "./signup/reducer";
import login from './login/reducer';
import listPoll from './ListPoll/reducer';

const rootReducer = combineReducers({
    signup,
    login,
    listPoll,
});

export default rootReducer;