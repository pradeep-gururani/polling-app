import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import ListPoll from "../components/ListPoll";
import UserHome from "../components/UserHome";
import { logOut } from "../redux/actions";

// const resetState={};
// import {loginComponent} from './loginComponent';
class User extends Component {
  

  render() {
    return (
      <div className="container-fluid d-flex">
        <div className ="col-sm-9">
          <Switch>
            <Route exact path="/User/Listpolls" component={ListPoll} />
            <Route path="/" component={UserHome} />
            {/* <Route exact path ="/" component = {loginComponent}></Route>                                                             */}
          </Switch>
        </div>
        <div className="col-sm-3 sidebar">
        <Link to="/User/Listpolls">
          <button className="btn btn-primary list mb-1">
             List Polls
          </button>
          </Link>
          <Link to="/">
            <button
              className="btn btn-danger logout"
              onClick={() => this.props.logOut()}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  
  logOut: data => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
