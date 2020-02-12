import React from 'react';

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
        <button className="btn btn-success">
          <span className="fa fa-trash"></span>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
