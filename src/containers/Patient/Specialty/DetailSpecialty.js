import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import "./DetailSpecialty.scss";
import HomeHeader from "../../../containers/HomePage/HomeHeader";

class DetailSpecialty extends Component {
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
    return (
      <>
        <HomeHeader />
        <div>Hellooooooooooooooooooooooo</div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
