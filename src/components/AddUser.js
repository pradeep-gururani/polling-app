import React, { Component } from "react";
import { signupRequest } from "../redux/actions";
import { connect } from "react-redux";
const GETDATA = require("../services/GetData");
let adminId = GETDATA('loginData');

class AddUser extends Component {
  submit = data => {
    data.preventDefault();
    let formVal = {
      t1: this.refs.t1.value,
      t2: this.refs.t2.value,
      t3: this.refs.t3.value
    };
    this.props.signupRequest(formVal);
  };

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.submit}>
         { (adminId !== null)
          ? (adminId.user_id === '5a0419a09407e50012e97b4b')
              ? <h3 className="mb-3">Add New User</h3>
              : <h3 className="mb-3">Signup</h3>            
            
          : <h3 className="mb-3">Signup</h3>             
        }
          <input
            type="text"
            name="text1"
            ref="t1"
            className="form-control mb-3"
            placeholder="username"
            required
          />
          <input
            type="password"
            name="text2"
            ref="t2"
            className="form-control mb-3"
            placeholder="password"
            required
          />
          <input
            type="text"
            name="text3"
            ref="t3"
            className="form-control mb-3"
            placeholder="role"
            required
          />
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
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
