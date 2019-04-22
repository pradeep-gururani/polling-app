import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Switch,Route,withRouter} from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import Login from './components/Login';
import Auth from './containers/Auth';
const GETDATA = require("./services/GetData");
class App extends Component {

  componentDidMount() {
    let isLoggedIn = GETDATA('loginData');
      if(isLoggedIn === null){
        this.props.history.push('/');
      }          
  }
  
  render() {  
    let loggedIn = GETDATA('loginData');
    return (
      <div className="App">             
       
          <Switch>
              <Route path = "/User" component = {(loggedIn!==null)?User:Login}></Route>    
              <Route path = "/Admin" component = {Admin}></Route>
              <Route path = "/Login" component = {Login}></Route>                                                                                                
              <Route  path = "/" component = {(loggedIn!==null)?Login:Auth}></Route>                
          </Switch>              
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));