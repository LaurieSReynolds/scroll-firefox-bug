import React, { Component } from 'react';
import Table from './Table';
import './App.css';

import getRecords from './fakeData';

class App extends Component {
  render() {
    const data = getRecords(50);

    return (
      <div className="App">
        <div className="App-header">
          <div className='header-content'>
            ~ Scroll to a row that is off screen.<br />
            ~ Click in a cell in the first column.<br />
            ~ The row will display with green hightlight.<br />
            ~ In chrome, the table scrolls to the row.<br />
            ~ In firefox, it scrolls to the top.<br />
            <br />
           In index.css removing position: absolute from .table-body-container fixes the problem <br />    
          </div>
        </div>
        <div className='table-container'>
          <Table 
            data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
