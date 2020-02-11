import React from 'react';

const DataTable = (props) => {
  return (
    <table className='data-table'>
      <tbody>
        <tr>
          <th>Номер ТП</th>
          <th>Номер счетчика</th>
          <th>Показания</th>
          <th>Дата</th>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
