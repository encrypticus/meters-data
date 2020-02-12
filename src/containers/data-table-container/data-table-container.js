import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import DataTable from '$c/data-table';
import {fetchMetersData, deleteRow } from '$actions';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';
import PropTypes from 'prop-types';
import DataService from '../../services/dataService';

class DataTableContainer extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    fetchMetersData: PropTypes.func.isRequired,
    dataService: PropTypes.instanceOf(DataService),
    deleteRow: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchMetersData } = this.props;

    fetchMetersData();
  }

  deleteRow = (id) => {
    const { deleteRow } = this.props;

    deleteRow(id);
  };

  render() {

    const {
      data,
      isLoading,
      hasError
    } = this.props;

    if (isLoading && !hasError) return <Spinner/>;

    if (hasError) return <ErrorIndicator/>;

    return <DataTable data={data} deleteRow={this.deleteRow}/>;
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
    fetchMetersData: fetchMetersData(dispatch, dataService),
    deleteRow: deleteRow(dispatch, dataService)
  };
}

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DataTableContainer);
