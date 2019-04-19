import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Switch,Route} from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import Login from './components/Login';
import Auth from './containers/Auth';
const GETDATA = require("./services/GetData");
class App extends Component {
  render() {  
    let loggedIn = GETDATA('loginData');
    return (
      <div className="App">             
       
          <Switch>
              <Route path = "/User" component = {User}></Route>    
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
