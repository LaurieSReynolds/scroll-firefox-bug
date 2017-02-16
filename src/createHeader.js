import React from 'react';
import _ from 'lodash';

const createHeader = (columns) => {
  const header = _.map(columns, (columnName) => {
    const cellClass = `col-head`;
      return (
        <th
          key={`th-${columnName}`}
          className={cellClass}
        >
          {columnName.toUpperCase()}
        </th>
      ); 
    });
    return (
      <tr>
        {header}
      </tr>
    )
}

export default createHeader;
