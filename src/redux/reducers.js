import {combineReducers} from "redux";
import signup from "./signup/reducer";
import login from './login/reducer';
import listPoll from './ListPoll/reducer';
import takePoll from './TakePoll/reducer';
import logout from './logout/reducer';
const rootReducer = combineReducers({
    signup,
    login,
    listPoll,
    takePoll,
    logout,
});

export default rootReducer;