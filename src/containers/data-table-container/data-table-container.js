import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import DataTable from '$c/data-table';
import {dataLoaded, dataRequested, emmitError} from '$actions';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';

class DataTableContainer extends React.Component {

  componentDidMount() {
    const {
      dataService,
      dataLoaded,
      emmitError
    } = this.props;

    dataService.getMetersData()
      .then(response => {
        let data = [];

        for (const key in response) {
          response[key].id = key;
          data.push(response[key]);
        }

        return data;
      })
      .then((data) => {
        dataLoaded(data);
      })
      .catch(() => {
        emmitError();
      });
  }

  render() {

    const {
      data,
      isLoading,
      hasError,
      dataLoaded,
      dataRequested,
      emmitError,
      dataService
    } = this.props;

    if (isLoading && !hasError) return <Spinner/>;

    if (hasError) return <ErrorIndicator/>;

    return <DataTable data={data}/>;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    hasError: state.hasError,
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataLoaded: (data) => dispatch(dataLoaded(data)),
    dataRequested: () => dispatch(dataRequested()),
    emmitError: () => dispatch(emmitError())
  };
}

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DataTableContainer);
