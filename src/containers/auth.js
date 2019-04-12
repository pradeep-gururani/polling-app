import  React,{ Component } from 'react';
import AddUser  from "../components/AddUser";
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
 
export default Auth;