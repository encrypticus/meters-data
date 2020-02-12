import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const {
    tpNumber,
    countNumber,
    value,
    date,
    id,
    deleteRow
  } = props;

  return (
    <tr>
      <td>{tpNumber}</td>
      <td>{countNumber}</td>
      <td>{value}</td>
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
  deleteRow: PropTypes.func.isRequired
};

export default TableRow;
