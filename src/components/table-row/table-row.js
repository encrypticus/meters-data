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
    saveRecordID
  } = props;

  return (
    <tr>
      <td>{tpNumber}</td>
      <td>{countNumber}</td>
      <td className="value-col" onClick={() => saveRecordID(id, 'prompt')}>{value}</td>
      <td>{date}</td>
      <td>
        <button
          onClick={() => saveRecordID(id, 'confirm')}
          className="btn btn-outline-info">
          <span className="fa fa-trash"></span>
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  tpNumber: PropTypes.string.isRequired,
  countNumber: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  saveRecordID: PropTypes.func.isRequired
};

export default TableRow;
