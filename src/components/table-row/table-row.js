import React from 'react';
import PropTypes from 'prop-types';
import './table-row.scss';

const TableRow = (props) => {
  const {
    tpNumber,
    countNumber,
    value,
    date,
    id,
    deleteRow,
    changeValue
  } = props;

  const changeCurrentValue = () => {
    let value = prompt('Ввести значение');

    if (!value) return;

    value = value.trim();

    if (value === '') return;

    changeValue(id, value);
  };

  return (
    <tr>
      <td>{tpNumber}</td>
      <td>{countNumber}</td>
      <td className="value-col" onClick={changeCurrentValue}>{value}</td>
      <td>{date}</td>
      <td>
        <button
          onClick={() => deleteRow(id)}
          className="btn btn-success">
          <span className="fa fa-trash"></span>
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  tpNumber: PropTypes.number.isRequired,
  countNumber: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteRow: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default TableRow;
