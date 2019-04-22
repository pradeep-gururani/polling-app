import React, { Component } from "react";
import { loginRequest } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";
let clickCount = 0;
class LoginComponent extends Component {
  submit = data => {
    data.preventDefault();
    let loginFormVal = {
      user: this.refs.user.value,
      passwd: this.refs.passwd.value
    };
    this.props.loginRequest(loginFormVal);
  };

  componentDidUpdate() {
    if(this.props.inlogin.isSuccess === true){
      this.props.history.push('/Login');
    }
    
  }


  render() {

    return (
      <div className="form-group">
        <form  onSubmit={this.submit}>
          <h3 className="mb-3">Login</h3>
          <input
            type="text"
            name="text1"
            ref="user"
            placeholder="usename"
            className="form-control mb-3"
            required
          />
          <input
            type="password"
            name="text2"
            ref="passwd"
            className="form-control mb-3"
            placeholder="password"
            required      
          />         
               { (this.props.inlogin.isLoading === false)
               ?
               <input type="submit" className="btn btn-success" value="Login"  disabled = {(clickCount>=1)?true:false}
                onClick={()=>{
                  // clickCount++;
                  //   if((this.props.inlogin.isLoading === false)||(this.props.inlogin.isError === true)){
                  //     clickCount = 0;
                  //   }
                  }     
                } />  
                :<button className="buttonload btn btn-success" disabled={true}>
                  <i className="fa fa-spinner fa-spin"></i>
                </button>
              
              }       
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  inlogin: state.login
});

const mapDispatchToProps = dispatch => ({
  loginRequest: data => dispatch(loginRequest(data))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent));
