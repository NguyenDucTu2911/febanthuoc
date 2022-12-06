import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Customer.scss";
import Cuttom_customer from "./cuttom_customer";

class Customer extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="Customer">
        <div className="Customer-title">
          <h1 className="Customer-title_text">Quản Lý Khách Hàng</h1>
        </div>
        <div className="Employee-body">
          <Cuttom_customer />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
