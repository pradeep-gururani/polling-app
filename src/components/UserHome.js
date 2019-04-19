import React, { Component } from "react";
import { connect } from "react-redux";
class UserHome extends Component {
  render() {
    return (
      <div>
            <div className="alert alert-success" role="alert">
              <h2 className="alert-heading">Welcome User!</h2>              
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
)(UserHome);
