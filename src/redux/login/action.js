import axios from 'axios';
import { put } from 'redux-saga/effects'
import * as actions from '../actions';
import jwt_decode from  'jwt-decode';
export function* loginRequest(action){
    let error = null;
    let url = `https://secure-refuge-14993.herokuapp.com/login?username=${action.payload.user}&password=${action.payload.passwd}`;
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
            let decoded = Object.assign(jwt_decode(token),{'role':'user'}); 

            yield put(actions.loginSuccess({'data':res.data.token,"tok":decoded})); //auth success
        }
    }
}