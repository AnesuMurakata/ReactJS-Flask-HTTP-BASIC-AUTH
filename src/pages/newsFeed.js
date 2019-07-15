import React from 'react';
import {HashRouter as  Router, NavLink} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';
import '../index.css';

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="pageContainer">
                <Router>
                <Nav className='Nav-Menu'>
                    <NavItem>
                        <NavLink to="/">Cars</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Sports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Food</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Travel</NavLink>
                    </NavItem>
                    <hr></hr>
                </Nav>

                <div className='postCard'>
                    
                </div>
                </Router>
            </div>
        );
    }
}

export default NewsFeed;