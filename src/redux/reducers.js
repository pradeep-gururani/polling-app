import {combineReducers} from "redux";
import signup from "./signup/reducer";
import login from './login/reducer';
import listPoll from './ListPoll/reducer';
import takePoll from './TakePoll/reducer';
import logout from './logout/reducer';
import listUsers from './ListUsers/reducer';

const rootReducer = combineReducers({
    signup,
    login,
    listPoll,
    takePoll,
    logout,
    listUsers
});

export default rootReducer;