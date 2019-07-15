import React from 'react';
import './components.css';
import Select from 'react-select';

class FormField extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="Form-Field">
                <label className="Form-Label" htmlFor={this.props.componentId}>{this.props.name}</label>
                <input type="text" id={this.props.componentId} placeholder={this.props.place}></input>
            </div>
        );
    }
}

const typesOfUsers = [
    {label:"User", value:1},
    {label:"Admin", value:2},
];

class Dropdown extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="SelectionField">
                <label className="Form-Label" htmlFor="role">Role</label>
                <Select id="role" options ={typesOfUsers}/>
            </div>
        );
    }
}

function Button(props){
    return(
        <button>{props.name}</button>
    );
}

export {FormField, Dropdown, Button};