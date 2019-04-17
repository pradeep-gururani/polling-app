import React, { Component } from 'react';
import {connect} from 'react-redux';
import User from './User';
import Admin from './Admin';
const GETDATA = require("../services/GetData");
let adminId = GETDATA('loginData');
let localId;
class Login extends Component {    
    
    componentDidMount() {
        localId= (adminId.user_id === '5a0419a09407e50012e97b4b')? true : false;
    }
    render() { 
    console.log('admin');
    
        return ( 
            <div>
                {(localId)
                ?<Admin />
                :<User />
                }

            </div>
         );
    }
}
 

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
