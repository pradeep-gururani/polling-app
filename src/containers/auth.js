import  React,{ Component } from 'react';
import AddUser  from "../components/AddUser";
import LoginComponent from '../components/loginComponent';
import { connect } from 'react-redux';
class Auth extends Component {

    render() { 
        console.log('in auth',this.props);

        return ( 
            
            <div className = "row">

              
                <div className = "col-sm-6">
                    <AddUser  />
                </div>
                <div className = "col-sm-6">
                    <LoginComponent />
                </div>

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
  )(Auth);