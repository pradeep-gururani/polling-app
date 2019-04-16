import React, { Component } from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import {connect } from 'react-redux';
import ListPoll from '../components/ListPoll';
import UserHome from '../components/UserHome';
import {listPollRequest} from '../redux/actions';
class User extends Component {
    componentDidMount(){
        this.props.listPollRequest();
    }
        
    render() { 
        return ( 
            <div className = "container-fluid d-flex">
                <Switch>
                    <Route exact path = "/User/Listpolls" component = {ListPoll}></Route>
                    <Route path = "/User/home" component = {UserHome}></Route>
                                                            
                </Switch>
                {console.log('user',this.props)}    
                <div className = "row">
                    <div className = "col-sm-3">
                        <button className = "btn btn-primary list">
                           <Link to = "/User/Listpolls"> List Polls</Link>
                        </button>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    state: state
  });
  
  const mapDispatchToProps = dispatch => ({
    listPollRequest: data => dispatch(listPollRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User);
