import axios from 'axios';
import { put } from 'redux-saga/effects'
import * as actions from '../actions'
export function* signupRequest(action){
    let error = null;
    let url = `https://secure-refuge-14993.herokuapp.com/add_user?username=${action.payload.t1}&password=${action.payload.t2}&role=${action.payload.t3}`;
    const res = yield axios.get(url,{
        method: 'POST'
    }).then((res)=>{
        return res
    
    }).catch((err)=>{
        error = err;    
        return err
    });

    if(error !== null ){            
        yield put (actions.signupError({'message':'Error in api request'}));
    }
    else{
        if(res.data  && res.data.error === 1){            
            yield put(actions.signupError({'message':res.data.message}));
        }else{            
            yield put(actions.signupSuccess({'data':res.data}));
        }
    }

}