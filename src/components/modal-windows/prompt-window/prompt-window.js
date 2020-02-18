import React from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {showPrompt, insertValue} from '$actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PromptWindow extends React.Component {

  static propTypes = {
    showPrompt: PropTypes.func.isRequired,
    isPromptShow: PropTypes.bool.isRequired,
    insertValue: PropTypes.func.isRequired,
    changeValue: PropTypes.func.isRequired
  };

  hidePrompt = () => {
    const { showPrompt, insertValue } = this.props;

    insertValue("");
    showPrompt(false);
  };

  onInputChange = (event) => {
    const inputValue = event.currentTarget.value;
    const { insertValue } = this.props;

    insertValue(inputValue);
  };

  changeValue = () => {
    const { changeValue } = this.props;
    changeValue();
  };

  render() {
    const { isPromptShow } = this.props;

    return (
      <Modal show={isPromptShow} onHide={() => this.hidePrompt()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p>Ввести значение</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <input
              type="number"
              onChange={this.onInputChange}
            />
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-success" onClick={() => this.hidePrompt()}>Отменить</Button>
          <Button variant="outline-danger" onClick={() => this.changeValue()}>Ввести</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPromptShow: state.modal.isPromptShow,
    insertedValue: state.modal.insertedValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showPrompt: (show) => dispatch(showPrompt(show)),
    insertValue: (value) => dispatch(insertValue(value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptWindow);
