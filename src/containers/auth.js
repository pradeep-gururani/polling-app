import  React,{ Component } from 'react';
import AddUser  from "../components/AddUser";
import { connect } from 'react-redux';
class Auth extends Component {

    render() { 
        console.log('in auth',this.props);
        return ( 
            <div>
                <AddUser  />
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