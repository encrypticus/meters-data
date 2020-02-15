import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import {addStation} from '$actions';
import PropTypes from 'prop-types';
import DataService from '../../services/dataService';
import Menu from '$c/menu';

import 'mmenu-js';
import './menu.scss';

class MenuContainer extends React.Component {

  static propTypes = {
    addStation: PropTypes.func.isRequired,
    dataService: PropTypes.instanceOf(DataService),
    tpNumbers: PropTypes.array.isRequired,
    countNumbers: PropTypes.object.isRequired
  };

  createRequestBody = (tpNumber, countNumbers) => {
    let body = [];

    countNumbers.forEach((countNumber) => {
      body.push({
        tpNumber,
        countNumber,
        value: '',
        date: new Date().toLocaleDateString()
      });
    });

    return body;
  };

  onChangeValue = (num) => {
    const {
      addStation,
      countNumbers: { tp309, tp310, tp311, tp312, tp313, tp314 }
    } = this.props;

    let body;

    switch (num) {
      case '309':
        body = this.createRequestBody(num, tp309);
        break;

      case '310':
        body = this.createRequestBody(num, tp310);
        break;

      case '311':
        body = this.createRequestBody(num, tp311);
        break;

      case '312':
        body = this.createRequestBody(num, tp312);
        break;

      case '313':
        body = this.createRequestBody(num, tp313);
        break;

      case '314':
        body = this.createRequestBody(num, tp314);
        break;

      default:
        body = this.createRequestBody('309', tp309);
    }

    addStation(body);
  };

  componentDidMount() {
    this.hamburgerDomElement = document.querySelector('.hamburger');
    this.menuDomElement = document.getElementById('mmenu');

    const mmenu = new Mmenu(this.menuDomElement, {
      extensions: ['position-right', 'theme-dark'],
      navbar: {
        title: '<span>Меню</span>',
      },
      onClick: {
        close: true,
      },
    });

    const api = mmenu.API;

    api.bind('open:before', () => {
      this.hamburgerDomElement.classList.add('is-active');
    });

    api.bind('close:before', () => {
      this.hamburgerDomElement.classList.remove('is-active');
    });
  }

  render() {
    const { tpNumbers } = this.props;

    return (
      <Menu
        onChangeValue={this.onChangeValue}
        tpNumbers={tpNumbers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tpNumbers: state.tpNumbers,
    countNumbers: state.countNumbers
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    addStation: addStation(dispatch, dataService)
  };
};

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MenuContainer);