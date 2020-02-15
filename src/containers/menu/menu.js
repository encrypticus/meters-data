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
    dataService: PropTypes.instanceOf(DataService)
  };

  tpNumbers = ['309', '310', '311', '312', '313', '314'];

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
    const { addStation } = this.props;
    let body;

    switch (num) {
      case '309':
        body = this.createRequestBody(num, ['100964', '160000']);
        break;

      case '310':
        body = this.createRequestBody(num, ['215110', '995258', '19250', '114489']);
        break;

      case '311':
        body = this.createRequestBody(num, ['215933', '516465']);
        break;

      case '312':
        body = this.createRequestBody(num, ['820943', '835057']);
        break;

      case '313':
        body = this.createRequestBody(num, ['20297549']);
        break;

      case '314':
        body = this.createRequestBody(num, ['20309187']);
        break;

      default:
        body = this.createRequestBody('309', ['100964', '160000']);
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
    return (
      <Menu
        onChangeValue={this.onChangeValue}
        tpNumbers={this.tpNumbers}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    addStation: addStation(dispatch, dataService)
  };
};

export default compose(
  withDataService(),
  connect(null, mapDispatchToProps)
)(MenuContainer);