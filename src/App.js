import React, { Component } from 'react';
import Auth from './containers/auth';
import './App.css';
import {connect} from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import {Switch,Route} from 'react-router-dom';
import User from './components/User';
const GETDATA = require("./services/GetData");

class App extends Component {
  render() {  

    return (
      <div className="App">             
        <Router>
          <Switch>
              <Route exact path = "/User" component = {User}></Route>    
                                 
          </Switch>
          {(GETDATA('loginData')!==null)
          ?(<User />)
          :(<Auth />)
          }
  
          
        </Router>
        
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
