import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import DataTable from '$c/data-table';
import {fetchMetersData} from '$actions';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';

class DataTableContainer extends React.Component {

  componentDidMount() {
    const { fetchMetersData } = this.props;

    fetchMetersData();
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

function mapDispatchToProps(dispatch, ownProps) {
  const { dataService } = ownProps;

  return {
    fetchMetersData: fetchMetersData(dispatch, dataService)
  }
}

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DataTableContainer);
