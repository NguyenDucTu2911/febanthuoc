import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Foorerfe.scss";

class Foorerfe extends Component {
  render() {
    return (
      <div className="Foorerfe-container">
        <div className="Foorerfe-content">@by Đồ ÁN</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Foorerfe);
