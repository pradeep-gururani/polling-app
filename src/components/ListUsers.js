import React, { Component } from "react";
import { connect } from "react-redux";
import { listUsersRequest } from "../redux/actions";

class ListUsers extends Component {
  componentDidMount() {
    this.props.listUsersRequest();
  }
  render() {
    return (
      <div className="listuser">
        <h3 className ="mb-3">All Users</h3>
        <ul className="list-group">
          {this.props.userList.data &&
            this.props.userList.data.map(user => (
              <li key={user._id} className="list-group-item userlist">
                {user.username}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.listUsers.data
});

const mapDispatchToProps = dispatch => ({
  listUsersRequest: data => dispatch(listUsersRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
