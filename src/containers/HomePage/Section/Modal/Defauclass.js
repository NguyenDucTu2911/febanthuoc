import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class Defauclass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Defauclass);
