import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import "./DoctorExtraInfor.scss";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.language !== this.props.language) {
    }
  }
  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };

  render() {
    let { isShowDetailInfor } = this.state;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address">Dia chi kham</div>
          <div className="name-clinic">Name clinic</div>
          <div className="detail-address">Detail dia chi</div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              Gia kham:200000
              <span onClick={() => this.showHideDetailInfor(true)}>
                Xem chi tiet
              </span>
            </div>
          )}
          {isShowDetailInfor === true && (
            <>
              <div className="title-price">Gia kham:</div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">Gia kham</span>
                  <span className="right">2000000</span>
                </div>
                <div className="note">
                  dddddddddddddddddddddddddddddddddddddddddddddddd
                </div>
              </div>
              <div className="payment">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfor(false)}>
                  An bang gia
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
