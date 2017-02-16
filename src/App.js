import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './Table';
import './App.css';

import getRecords from './fakeData';

class App extends Component {
  render() {
    const data = getRecords(50);

    return (
      <div className="App">
        <div className='fixed-height-header'>
          <h1> Fixed Height Header </h1>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='table-container'>
          <Table 
            data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
