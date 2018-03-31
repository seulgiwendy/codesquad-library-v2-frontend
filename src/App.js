import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    );
  }
}

export default App;
