import React, { Component } from "react";
import { connect } from "react-redux";
class UserHome extends Component {
  render() {
    return (
      <div>
        <p>Welcome User</p>
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
