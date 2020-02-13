import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import {addStation} from '$actions';
import PropTypes from 'prop-types';
import DataService from '../../services/dataService';

const Select = (props) => {

  const ref = React.createRef();

  const createRequestBody = (tpNumber, countNumbers) => {
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

  const onChangeValue = (num) => {
    const { addStation } = props;
    let body;

    switch (num) {
      case '309':
        body = createRequestBody(num, ['100964', '160000']);
        break;

      case '310':
        body = createRequestBody(num, ['215110', '995258', '19250', '114489']);
        break;

      case '311':
        body = createRequestBody(num, ['215933', '516465']);
        break;

      case '312':
        body = createRequestBody(num, ['820943', '835057']);
        break;

      case '313':
        body = createRequestBody(num, ['20297549']);
        break;

      case '314':
      body = createRequestBody(num, ['20309187']);
        break;

      default:
        body = createRequestBody('309', ['100964', '160000']);
    }

    addStation(body);
  };

  return (
    <select
      value="Добавить ТП"
      onChange={() => onChangeValue(ref.current.value)}
      ref={ref}
    >
      <option disabled>Добавить ТП</option>
      <option value="309">309</option>
      <option value="310">310</option>
      <option value="311">311</option>
      <option value="312">312</option>
      <option value="313">313</option>
      <option value="314">314</option>
    </select>
  );
};

Select.propTypes = {
  addStation: PropTypes.func.isRequired,
  dataService: PropTypes.instanceOf(DataService)
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { dataService } = ownProps;

  return {
    addStation: addStation(dispatch, dataService)
  };
};

export default compose (
  withDataService(),
  connect(null, mapDispatchToProps)
)(Select);
