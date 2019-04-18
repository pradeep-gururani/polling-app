import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, Link, Route } from "react-router-dom";
import AddUser from '../components/AddUser';
import { logOut } from "../redux/actions";
import ListUsers from './ListUsers';
class Admin extends Component {    
    render() { 
        return ( 
            
            <div className = "admin row">
            
                <div className = "col-sm-9">
                    
                <Switch>
                    <Route path = "/Admin/AddUser" component = {AddUser}></Route>
                            <Route path = "/Admin/ListUsers" render = {() => <ListUsers/>}></Route>                            
                    <Route path="/Admin/" render={()=><div>test</div>} />
                        </Switch>
                    
                </div>
                <div className="col-sm-3">
                    <Link to= "/Admin/AddUser">
                        <button className = "btn btn-primary mb-2">
                            Add User
                        </button>                        
                    </Link>
                    <Link to = "/Admin/ListUsers">
                        <button className = "btn btn-primary mb-2">
                            All Users
                        </button>
                    </Link>
                    <Link to ="/Admin/AddPoll">
                        <button className = "btn btn-primary mb-2">
                            Add Poll
                        </button>
                    </Link>
                    <Link to ="/Admin/ListPolls">
                        <button className = "btn btn-primary mb-2">
                            All Polls
                        </button>
                    </Link>                    
                    <Link to="/">
                        <button className = "btn btn-danger"
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
  )(Admin);
  