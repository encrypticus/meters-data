import React from 'react';
import TableRow from '$c/table-row';
import PropTypes from 'prop-types';
import './data-table.scss';

const DataTable = (props) => {
  const { data, changeValue, saveRecordID } = props;

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
          saveRecordID={saveRecordID}
        />
      );

    });
  };

  const message = (
    <tr>
      <td colSpan="5">Нет показаний</td>
    </tr>
  );

  return (
    <table className="data-table table table-bordered">
      <thead className="thead-light">
      <tr>
        <th>Номер ТП</th>
        <th>Номер счетчика</th>
        <th>Показания</th>
        <th>Дата</th>
        <th>Удалить</th>
      </tr>
      </thead>
      <tbody>
      {data.length ? renderRows(data) : message}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  saveRecordID: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default DataTable;
