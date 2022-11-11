import React, { Component } from "react";
import { connect } from "react-redux";

import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner2.png";
import Banner3 from "../../assets/images/Banner3.png";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item ">
              <img src={Banner2} className="d-block w-100" alt="..." />
            </div>

            <div className="carousel-item ">
              <img src={Banner3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
