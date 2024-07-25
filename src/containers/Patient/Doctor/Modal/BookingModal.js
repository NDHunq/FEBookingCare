import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../../utils";
import "./BookingModal.scss";
import { Modal } from "reactstrap";
import ProfileDoctor from "../ProfileDoctor";
import _ from "lodash";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.language !== this.props.language) {
    }
  }

  render() {
    let { isOpenModal, closeBookingClose, dataTime } = this.props;
    let doctorId = "";
    if (dataTime && !_.isEmpty(dataTime)) {
      doctorId = dataTime.doctorID;
    }
    console.log("dataTime: ", dataTime);
    return (
      <Modal
        isOpen={isOpenModal}
        className="booking-modal-container"
        size="lg"
        centered>
        <div className="booking-modal-content">
          <div className="booking-modal-header">
            <span className="left">Thông tin đặt lịch khám bệnh</span>
            <span className="right" onClick={closeBookingClose}>
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="booking-modal-body">
            <div className="doctor-infor">
              <ProfileDoctor doctorId={doctorId} />
            </div>
            <div className="row">
              <div className="col-6 form-group">
                <label>Họ và tên</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Số điện thoại</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Dia chi email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Dia chi lien he</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Ly do kham</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Dat cho ai</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 form-group">
                <label>Gioi tinh</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="booking-modal-footer">
            <button className="btn-booking-confirm" onClick={closeBookingClose}>
              Luu
            </button>
            <button className="btn-booking-cancel" onClick={closeBookingClose}>
              Dong
            </button>
          </div>
        </div>
      </Modal>
    );
  }
  v;
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
