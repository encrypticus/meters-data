import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './confirm-window.scss';

const ConfirmWindow = (props) => {
  const { isConfirmShow, hideConfirm, deleteRow } = props;

  return (
    <Modal show={isConfirmShow} onHide={() => hideConfirm()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="modal-heading">Внимание!</p>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Удалить запись?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-success" onClick={() => hideConfirm()}>Отменить</Button>
        <Button variant="outline-danger" onClick={() => deleteRow()}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmWindow;
