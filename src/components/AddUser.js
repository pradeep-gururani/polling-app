import React, { Component } from 'react';
import { signupRequest }  from '../redux/actions';
import { connect } from 'react-redux';

class AddUser extends Component {
    
    submit = (data)=>{
        data.preventDefault();
        let formVal = {t1:this.refs.t1.value,t2:this.refs.t2.value,t3:this.refs.t3.value};        
        this.props.signupRequest(formVal);
    }

    render() {         
        return (
            <div className = "form-group">
                <form onSubmit = {this.submit}>
                    <h3>
                        Signup
                    </h3>
                    <input 
                        type= "text" 
                        name = "text1" 
                        ref ="t1"
                        className = "form-control"
                        required
                    />
                    <input 
                        type = "password"  
                        name = "text2" 
                        ref ="t2"
                        className = "form-control"
                        required
                    />
                    <input 
                        type = "text"  
                        name = "text3" 
                        ref ="t3"
                        className = "form-control"
                        required
                    />
                    <input type ="submit" className ="btn btn-primary" value = "submit" />
                </form>
                <div>
                    <h3>{this.props.state.signup.message}</h3>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    state: state
  });
  
  const mapDispatchToProps = dispatch => ({
    signupRequest: data => dispatch(signupRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddUser);