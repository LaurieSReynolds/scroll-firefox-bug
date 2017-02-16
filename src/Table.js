import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import createHeader from './createHeader';
import createRows from './createRows';
import { showSelected } from './showSelected';

class Table extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      selected: -1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    showSelected(this.state.selected);
  }

  onClick(e) {
    e.preventDefault();
    const parent = e.target.parentNode;
    let selected = parseInt(parent.getAttribute('name'), 10);
    selected = selected ? selected : -1;
    this.setState({ selected });
  }

  render() {
    const data = this.props.data;
    const rows = createRows(data.records, this.state.selected, data.columns, this.onClick);
    const header = createHeader(data.columns);
    window.scrollTo(0,0);
    return (
      <div>
      <div className='table-header-container'>
        <table>
          <thead>
            {header}
          </thead>
        </table>
      </div>
      <div className='table-body-container'>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object,
};

export default Table;
