import React from 'react';
import withDataService from '$c/hoc';

class DataTable extends React.Component {

  render() {
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
  }
}

export default withDataService()(DataTable);
