import axios from 'axios';
import { put } from 'redux-saga/effects';
import * as actions from '../actions';
import {baseUrl} from '../../config';
export function* listPollRequest(action){
    let error = null;
    let url = `${baseUrl}/list_polls`;
    const res = yield axios.get(url,{
        method: 'POST'
    }).then((res)=>{
        return res
    
    }).catch((err)=>{
        error = err;    
        return err
    });

    if(error !== null ){            
        yield put (actions.listPollError({'message':'Error in api request'}));
    }
    else{          
        yield put(actions.listPollSuccess({'data':res.data}));        
    }

}