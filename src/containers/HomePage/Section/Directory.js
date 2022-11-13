import React, { Component } from "react";
import { connect } from "react-redux";
import "./Directory.scss";
import { FormattedMessage } from "react-intl";

import Physiological from "../../../assets/images/sinh-ly-noi-tiet-to.webp";
import Heart_Health from "../../../assets/images/tim.png";
import Supports_digestion from "../../../assets/images/ho-tro-tieu-hoa.webp";
import Brain_nerves from "../../../assets/images/nao.png";
import Improved_functional_enhancement from "../../../assets/images/khoe.png";
import Take_care_of_your_body from "../../../assets/images/dep.png";



class Directory extends Component {
  render() {
    return (
      <div className="DirectoryFe">
        <div className="home-page-content">
          <h3 className="content-herder">
          <FormattedMessage id='homeheader.Directory'/>
          </h3>
          <div className="content-item">
          
            <a href="" className="content-item__link">
              <div className="link-body">
                <img
                 src={Physiological}
                  alt=""
                  className="content-item__img"
                />
                <div className="content-item__content">
                <FormattedMessage id='homeheader.Physiological_Hormonal'/>
                </div>
              </div>
            </a>
            <a href="" className="content-item__link">
            <div className="link-body1">
              <img
                src={Heart_Health}
                alt=""
                className="content-item__img"
              />
              <div className="content-item__content">
              <FormattedMessage id='homeheader.Heart_Health'/>
              </div>
              </div>
            </a>
            <a href="" className="content-item__link">
            <div className="link-body">
              <img
                src={Supports_digestion}
                alt=""
                className="content-item__img"
              />
              <div className="content-item__content">
              <FormattedMessage id='homeheader.Supports_digestion'/>
              </div>
              </div>
            </a>
            <a href="" className="content-item__link">
            <div className="link-body1">
              <img
                src={Brain_nerves}
                alt=""
                className="content-item__img"
              />
              <div className="content-item__content">
                <FormattedMessage id='homeheader.Brain_nerves'/>
              </div>
              </div>
            </a>
            <a href="" className="content-item__link">
            <div className="link-body">
              <img
                src={Improved_functional_enhancement}
                alt=""
                className="content-item__img"
              />
              <div className="content-item__content">
              <FormattedMessage id='homeheader.Improved_functional_enhancement'/>
              </div>
              </div>
            </a>
            <a href="" className="content-item__link">
            <div className="link-body1">
              <img
                src={Take_care_of_your_body}
                alt=""
                className="content-item__img"
              />
              <div className="content-item__content">
              <FormattedMessage id='homeheader.Take_care_of_your_body'/>
              </div>
              </div>
            </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
