import React from 'react';
import withDataService from '$c/hoc';

const DataTable = (props) => {
  console.log(props);
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

export default withDataService()(DataTable);
