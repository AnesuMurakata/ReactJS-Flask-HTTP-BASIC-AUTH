import React from 'react';
import {HashRouter as  Router, NavLink} from 'react-router-dom';
import { FormField, Dropdown, Button } from '../components';

class SignUpPage extends React.Component{
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
            <div className="Name-Section">
              <div className="FirstName" id="firstName">
                <div className="FirstNameContainer">
                  <FormField className="myInput" name="First Name" place="Enter your first name" componentId="firstName"/>
                </div>
              </div>
              <div className="LastName" id="lastName">
                <div className="LastNameContainer">
                  <FormField name="Last Name" place="Enter your last name" componentId="lastName"/>
                </div>
              </div>
            </div>

            <div className="Body-Section">
              <FormField name="Email" place="Enter your email" componentId="email"/>
              <FormField name="Password" place="Enter your password" componentId="password"/>
              <Dropdown/>
              <div className="Terms">
                <input type="checkbox"></input>
                <div>I have read and accept the <a href="#">T's & C's</a> of using this service</div>
              </div>
              <div className="ButtonContainer">
                <Button name="Sign Up"/>
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

export default SignUpPage;