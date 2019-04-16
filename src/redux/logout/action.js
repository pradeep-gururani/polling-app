import { put } from 'redux-saga/effects'
import * as actions from '../actions';
export function* logout(action){
    

    yield put(actions.logOut()); //log out
    
}