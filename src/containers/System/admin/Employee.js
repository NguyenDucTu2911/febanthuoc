import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Employee.scss";
import Managebody from "./managebody";
class Employee extends Component {
  constructor(props){
    super(props);
    this.state={
       
    }
  }

  async componentDidMount() {
  }

  render() {
    return (
        
      <div className="Employee">
        <div className="Employee-title">
          <h1 className="Employee-title_text">
            <FormattedMessage id="homeheader.manage-Employee" />
          </h1>
        </div>
        <div className="Employee-body">
        <Managebody/>
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
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
