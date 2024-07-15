import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }
  listenToEmitter = () => {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  };
  toggle = () => {
    this.props.toggleFromParent();
  };
  async componentDidMount() {}
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = (event, id) => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid) {
      this.props.createNewUser(this.state);
    }
  };
  render() {
    return (
      <div>
        <Modal
          className="modal-user-container"
          size="lg"
          isOpen={this.props.isOpen}
          toggle={() => {
            this.toggle();
          }}>
          <ModalHeader
            toggle={() => {
              this.toggle();
            }}>
            Add user
          </ModalHeader>
          <ModalBody>
            <div className="modal-user-body">
              <div className="input-container">
                <label>Email</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "email");
                  }}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  type="text"
                  value={this.state.password}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "password");
                  }}
                />
              </div>
              <div className="input-container">
                <label>First name</label>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "firstName");
                  }}
                />
              </div>
              <div className="input-container">
                <label>Last name</label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "lastName");
                  }}
                />
              </div>
              <div className="input-container address">
                <label>Address</label>
                <input
                  type="text"
                  value={this.state.address}
                  onChange={(event) => {
                    this.handleOnChangeInput(event, "address");
                  }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="px-3"
              color="primary"
              onClick={() => {
                this.handleAddNewUser();
              }}>
              Add new
            </Button>
            <Button
              className="px-3"
              color="secondary"
              onClick={() => {
                this.toggle();
              }}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
