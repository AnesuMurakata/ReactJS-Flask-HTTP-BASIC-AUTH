import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import SignUpPage from './pages/signUpPage';
import SignInPage from './pages/signInPage';
import NewsFeed from './pages/newsFeed';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={NewsFeed}/>
          <Route exact path="/signUp" component={SignUpPage}/>
          <Route exact path="/signIn" component={SignInPage}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
