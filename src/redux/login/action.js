import axios from 'axios';
import { put } from 'redux-saga/effects'
import * as actions from '../actions';
// import jwt_decode from  'jwt-decode';
import {baseUrl} from '../../config';
const DATASTORE = require("../../services/DataStore");
let jwt = require('jwt-simple');
let secret = "jwt_tok";
export function* loginRequest(action){
    let error = null;
    let url = `${baseUrl}/login?username=${action.payload.user}&password=${action.payload.passwd}`;
    const res = yield axios.get(url,{
        method: 'GET'
    }).then((res)=>{
        return res;
    
    }).catch((err)=>{
        error = err;    
        return err;
    });

    if(error !== null ){            
        yield put (actions.loginError({'message':'Error in api request'}));
    }
    else{
        if(res.data  && res.data.error === 1){            
            yield put(actions.loginError({'message':res.data.data})); //auth failure
        }else{
            let token = res.data.token;
            let decoded = Object.assign(jwt.decode(token, secret)); 
            let localId = {'user_id':decoded.user_id};
            DATASTORE("loginData",localId);//save to local storage
            yield put(actions.loginSuccess({'data':res.data.token,"tok":decoded})); //auth success
        }
    }
}