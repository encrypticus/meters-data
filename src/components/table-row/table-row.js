import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const {
    tpNumber,
    countNumber,
    value,
    date,
    id
  } = props;

  return (
    <tr>
      <td>{tpNumber}</td>
      <td>{countNumber}</td>
      <td>{value}</td>
      <td>{date}</td>
      <td>
        <button
          onClick={() => console.log(id)}
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
  id: PropTypes.string.isRequired
};

export default TableRow;
