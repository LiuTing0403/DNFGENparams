import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <label>
          stopCondition:
          <input type="text" name="stopCondition"/>
        </label>
      </form>
    );
  }
}

export default App;
