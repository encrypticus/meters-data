import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import DataTable from '$c/data-table';
import {fetchMetersData, deleteRow, changeValue, showConfirm, saveRecordID} from '$actions';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';
import PropTypes from 'prop-types';
import DataService from '../../services/dataService';
import ConfirmWindow from '$c/modal-windows/confirm-window';

class DataTableContainer extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    fetchMetersData: PropTypes.func.isRequired,
    dataService: PropTypes.instanceOf(DataService),
    deleteRow: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchMetersData } = this.props;

    fetchMetersData();
  }

  hideConfirm = () => {
    const { showConfirm } = this.props;

    showConfirm(false);
  };

  saveRecordID = (recordID) => {
    const { saveRecordID, showConfirm } = this.props;

    saveRecordID(recordID);
    showConfirm(true);
  };

  deleteRow = () => {
    const { deleteRow, recordID } = this.props;

    this.hideConfirm();
    deleteRow(recordID);
  };

  changeValue = (id, value) => {
    const { changeValue } = this.props;

    changeValue(id, value);
  };

  render() {

    const {
      data,
      isLoading,
      hasError
    } = this.props;

    if (isLoading && !hasError) return <Spinner/>;

    if (hasError) return <ErrorIndicator/>;

    return (
      <>
        <DataTable
          data={data}
          changeValue={this.changeValue}
          saveRecordID={this.saveRecordID}
        />
        <ConfirmWindow
          deleteRow={this.deleteRow}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.metersData.isLoading,
    hasError: state.metersData.hasError,
    data: state.metersData.data,
    recordID: state.modal.recordID
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { dataService } = ownProps;

  return {
    fetchMetersData: fetchMetersData(dispatch, dataService),
    deleteRow: deleteRow(dispatch, dataService),
    changeValue: changeValue(dispatch, dataService),
    showConfirm: (show) => dispatch(showConfirm(show)),
    saveRecordID: (recordID) => dispatch(saveRecordID(recordID))
  };
}

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DataTableContainer);
