import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <MainContainer /> 

        </div>
      </Router>
    );
  }
}

export default App;
