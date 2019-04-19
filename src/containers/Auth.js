import React, { Component } from "react";
import LoginComponent from "../components/loginComponent";
import { connect } from "react-redux";
class Auth extends Component {
  render() {
    return (
      <div className="row auth">
        <div className="container login">
          <LoginComponent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
