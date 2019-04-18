import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Switch,Route} from 'react-router-dom';
import User from './components/User';
import Admin from './components/Admin';
import Login from './components/Login';
import Auth from './containers/Auth';
import ListPoll from './components/ListPoll';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';

class App extends Component {
  render() {  

    return (
      <div className="App">             
       
          <Switch>
              <Route path = "/User" component = {User}></Route>    
              <Route path = "/Admin" component = {Admin}></Route>
              <Route path = "/Login" component = {Login}></Route> 
              {/* <Route exact path = "/User/ListPoll" component = {ListPoll}></Route>               */}
              {/* <Route exact path = "/Admin/AddUser" component = {AddUser}></Route> */}
              {/* <Route exact path = "/Admin/ListUsers" component = {ListUsers}></Route>                                                                               */}
              <Route  path = "/" component = {Auth}></Route> 
                                 
          </Switch>
          {/* {(GETDATA('loginData')!==null)
          ?(<User />)
          :(<Auth />)
          } */}
          {/* <Auth/> */}
          
      
        
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
