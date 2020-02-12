import React from 'react';
import TableRow from '$c/table-row';
import PropTypes from 'prop-types';

const DataTable = (props) => {
  const { data } = props;

  const renderRows = (data) => {

    return data.map(row => {

      const {
        tpNumber,
        countNumber,
        value,
        date,
        id
      } = row;

      return (
        <TableRow
          key={id}
          tpNumber={tpNumber}
          countNumber={countNumber}
          value={value}
          date={date}
          id={id}
        />
      );

    });
  };

  return (
    <table className='data-table table'>
      <tbody>
      <tr>
        <th>Номер ТП</th>
        <th>Номер счетчика</th>
        <th>Показания</th>
        <th>Дата</th>
      </tr>
      {renderRows(data)}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataTable;
