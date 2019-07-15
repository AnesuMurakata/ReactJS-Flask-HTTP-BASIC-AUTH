import React from 'react';
import {HashRouter as  Router, NavLink} from 'react-router-dom';
import { FormField, Dropdown, Button } from '../components';

class SignInPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <Router>
            <div className="Form-Container">
        <div className="Form-Borders">
          <div className="Form-Header">
            <NavLink to="/signIn">Sign In</NavLink> or <NavLink to="/">Sign Up</NavLink>
          </div>
           <div className="Form-Body">
           <form>
            <div className="Body-Section">
              <FormField name="Email" place="Enter your email" componentId="email"/>
              <FormField name="Password" place="Enter your password" componentId="password"/>
              <Dropdown/>
              <div className="ButtonContainer">
                <Button name="Sign In"/>
              </div>
            </div>
          </form>
        </div>
        </div>
        </div>
        </Router>
        );
    }
}

export default SignInPage;