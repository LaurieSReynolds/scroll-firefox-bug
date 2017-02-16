import React from 'react';
import _ from 'lodash';

const createRows = (records,  selected, columns, clickHandler) => {
  const count = records.length;
  const rows = _.times(count, (index) => {
    const recordItem = records[index];
    let idx = 1;
    const row = _.map(columns, (columnName) => {
      const cellClass = `col-${idx}`;
      idx++;
      return (
        <td
          key={`td-${index}-${columnName}`}
          className={cellClass}
          onClick={clickHandler}
        >
          {recordItem[columnName]}
        </td>
      );
    });

    let classNames = '';
    if (recordItem.id === selected) {
      classNames += ' tr-selected';
    }
    return (
      <tr
        key={`tr-${index}`}
        name={`${recordItem.id}`}
        id={`tr-${recordItem.id}`}
        className={classNames}
      >
        {row}
      </tr>);
  });

  return rows;
};

export default createRows;
