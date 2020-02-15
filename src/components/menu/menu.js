import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = (props) => {
  const { onChangeValue, tpNumbers } = props;

  const renderItems = (items) => {
    return items.map((item) => {
      return (
       <li key={item}>
         <a onClick={() => onChangeValue(item)} href="#">
           {item}
         </a>
       </li>
      );
    });
  };

  return (
    <nav id="mmenu">
      <ul>
        <li>
          <span>Добавить ТП</span>
          <ul>
            {renderItems(tpNumbers)}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  tpNumbers: PropTypes.array.isRequired
};

export default Menu;
