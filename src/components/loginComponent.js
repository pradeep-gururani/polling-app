import React, { Component } from 'react';
import {loginRequest} from '../redux/actions';
import {connect} from  'react-redux';
import {Link} from 'react-router-dom';
class LoginComponent extends Component {
    submit = (data)=>{
        data.preventDefault();
        let loginFormVal = {user:this.refs.user.value,passwd:this.refs.passwd.value};        
        this.props.loginRequest(loginFormVal);
    }

    render() { 
        return ( 
            <div className = "form-group">
                <form onSubmit = {this.submit}>
                    <h3>
                        Login   
                    </h3>
                    <input 
                        type= "text" 
                        name = "text1" 
                        ref ="user"
                        className = "form-control"
                        required
                    />
                    <input 
                        type = "password"  
                        name = "text2" 
                        ref ="passwd"
                        className = "form-control"
                        required
                    />                    
                    <input type ="submit" className = "btn btn-success" value = "Login" />
                </form>
                <div>
                    <h3 className={(this.props.state.login.isSuccess) ? 'alert alert-success' :'alert alert-danger'}>{this.props.state.login.message}</h3>
                    
                </div>
            </div>
         );
    }
}
const mapStateToProps = state => ({
    state: state
  });
  
  const mapDispatchToProps = dispatch => ({
    loginRequest: data => dispatch(loginRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginComponent);