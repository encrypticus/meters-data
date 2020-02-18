import React from 'react';
import {connect} from 'react-redux';
import {compose} from '$utils';
import withDataService from '$c/hoc';
import DataTable from '$c/data-table';
import {fetchMetersData, deleteRow, changeValue, showConfirm, showPrompt, saveRecordID} from '$actions';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';
import PropTypes from 'prop-types';
import DataService from '../../services/dataService';
import ConfirmWindow from '$c/modal-windows/confirm-window';
import PromptWindow from '$c/modal-windows/prompt-window';

class DataTableContainer extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    fetchMetersData: PropTypes.func.isRequired,
    dataService: PropTypes.instanceOf(DataService),
    deleteRow: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired,
    recordID: PropTypes.string.isRequired,
    saveRecordID: PropTypes.func.isRequired,
    showConfirm: PropTypes.func.isRequired,
    showPrompt: PropTypes.func.isRequired,
    insertedValue: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { fetchMetersData } = this.props;

    fetchMetersData();
  }

  hideConfirm = () => {
    const { showConfirm } = this.props;

    showConfirm(false);
  };

  hidePrompt = () => {
    const { showPrompt } = this.props;

    showPrompt(false);
  };

  saveRecordID = (recordID, modalType) => {
    const { saveRecordID, showConfirm, showPrompt } = this.props;

    saveRecordID(recordID);

    switch (modalType) {
      case 'confirm':
        showConfirm(true);
      break;

      case 'prompt':
        showPrompt(true);
      break;

      default:
        showConfirm(true);
    }
  };

  deleteRow = () => {
    const { deleteRow, recordID } = this.props;

    this.hideConfirm();
    deleteRow(recordID);
  };

  changeValue = () => {
    const { changeValue, recordID, insertedValue } = this.props;

    this.hidePrompt();

    if (insertedValue === '') return;

    changeValue(recordID, insertedValue);
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
        <ConfirmWindow deleteRow={this.deleteRow}/>
        <PromptWindow changeValue={this.changeValue}/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.metersData.isLoading,
    hasError: state.metersData.hasError,
    data: state.metersData.data,
    recordID: state.modal.recordID,
    insertedValue: state.modal.insertedValue
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { dataService } = ownProps;

  return {
    fetchMetersData: fetchMetersData(dispatch, dataService),
    deleteRow: deleteRow(dispatch, dataService),
    changeValue: changeValue(dispatch, dataService),
    showConfirm: (show) => dispatch(showConfirm(show)),
    showPrompt: (show) => dispatch(showPrompt(show)),
    saveRecordID: (recordID) => dispatch(saveRecordID(recordID))
  };
}

export default compose(
  withDataService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DataTableContainer);
