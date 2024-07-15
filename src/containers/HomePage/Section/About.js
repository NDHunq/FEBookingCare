import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";

class About extends Component {
  render() {
    return (
      <div className="section-about section-share">
        <div className="section-about-header"> The ERAS Tour</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="300px"
              src="https://www.youtube.com/embed/CFP5LNdSWso"
              title='Taylor Swift - "Cruel Summer" (Live From Taylor Swift | The Eras Tour) - 4K'
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen></iframe>
          </div>
          <div className="content-right">
            <p>
              The Eras Tour is the ongoing sixth concert tour by the American
              singer-songwriter Taylor Swift. It commenced on March 17, 2023, in
              Glendale, Arizona, United States, and is set to conclude on
              December 8, 2024, in Vancouver, Canada, consisting of 152 shows
              spanning five continents. It became the highest-grossing tour in
              history as the first tour ever to surpass $1 billion in revenue,
              and has had a documented cultural impact across the globe.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
