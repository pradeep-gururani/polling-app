import React, { Component } from 'react';
import {connect} from 'react-redux';
import User from './User';
import Admin from './Admin';
const GETDATA = require("../services/GetData");
class Login extends Component {    
  
      render() { 
        let adminId = GETDATA('loginData');            
        return ( 
            <div>
                {(adminId && adminId.user_id === '5a0419a09407e50012e97b4b')
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
