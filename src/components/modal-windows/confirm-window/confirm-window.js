import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {showConfirm} from '$actions';
import {connect} from 'react-redux';
import './confirm-window.scss';

class ConfirmWindow extends React.Component {

  hideConfirm = () => {
    const { showConfirm } = this.props;
    showConfirm(false);
  };

  deleteRow = () => {
    const { deleteRow } = this.props;
    deleteRow();
  };

  render() {
    const { isConfirmShow } = this.props;

    return (
      <Modal show={isConfirmShow} onHide={() => this.hideConfirm()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className="modal-heading">Внимание!</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Удалить запись?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-success" onClick={() => this.hideConfirm()}>Отменить</Button>
          <Button variant="outline-danger" onClick={() => this.deleteRow()}>Удалить</Button>
        </Modal.Footer>
      </Modal>
    );
  }

};

function mapStateToProps(state) {
  return {
    isConfirmShow: state.modal.isConfirmShow
  };
}

function mapDispatchToProps(dispatch) {

  return {
    showConfirm: (show) => dispatch(showConfirm(show))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmWindow);
