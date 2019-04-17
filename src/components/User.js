import React, { Component } from "react";
import { Switch, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import ListPoll from "../components/ListPoll";
import UserHome from "../components/UserHome";
import { listPollRequest, logOut } from "../redux/actions";

// const resetState={};
// import {loginComponent} from './loginComponent';
class User extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = resetState;
  // }
  componentDidMount() {
    this.props.listPollRequest();
  }
  logout = data => {
    // console.log("logout---", this.props);
    // this.setState(resetState);
  };

  render() {
    return (
      <div className="container-fluid d-flex">
        <Switch>
          <Route exact path="/User/Listpolls" component={ListPoll} />
          <Route path="/User/home" component={UserHome} />
          {/* <Route exact path ="/" component = {loginComponent}></Route>                                                             */}
        </Switch>
        <div className="col-sm-3">
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
  listPollRequest: data => dispatch(listPollRequest(data)),
  logOut: data => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
