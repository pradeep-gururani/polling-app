import React, { Component } from 'react';
import {connect} from 'react-redux';
import {listUsersRequest} from '../redux/actions';
class ListUsers extends Component {    

    componentDidMount() {
        this.props.listUsersRequest();
    }

    render() { 
        console.log('user-list',this.props);
        
        return (  
            <div className="col-sm-9">
                <h1>Users List</h1>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    userList: state.listUsers
  });
  
  const mapDispatchToProps = dispatch => ({
    listUsersRequest: data => dispatch(listUsersRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListUsers);