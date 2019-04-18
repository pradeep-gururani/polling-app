import {combineReducers} from "redux";
import signup from "./signup/reducer";
import login from './login/reducer';
import listPoll from './ListPoll/reducer';
import takePoll from './TakePoll/reducer';
import logout from './logout/reducer';
import listUsers from './ListUsers/reducer';
import addPoll from './AddPoll/reducer';
import deletePoll from './DeletePoll/reducer';
const rootReducer = combineReducers({
    signup,
    login,
    listPoll,
    takePoll,
    logout,
    listUsers,
    addPoll,
    deletePoll,
});

export default rootReducer;