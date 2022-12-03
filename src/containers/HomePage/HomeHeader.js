import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Section/HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant";
import { ChangelanguageApp } from "../../store/actions/appActions";
import { withRouter } from "react-router";

class HomeHeader extends Component {
  Changelanguage = (language) => {
    this.props.ChangelanguageApp(language);
  };
  toHome = () => {
    if (this.props.history) {
      this.props.history.push("/Home");
    }
  };
  render() {
    let language = this.props.language;

    return (
      <div className="HomeHeader-container">
        <div className="HomeHeader-content">
          <div className="HomeHeader-content_item">
            <div className="top_content">
              <div className="left_content">
                <div
                  className="header-logo"
                  onClick={() => this.toHome()}
                ></div>
              </div>
              <div className="center_content">
                <div className="child_content">
                  <a href="#ConTainer">
                    <p>
                      <FormattedMessage id="homeheader.Medicine" />
                    </p>
                  </a>
                </div>
                <div className="child_content" onClick={() => this.toHome()}>
                  <a href="#TPCN">
                    <p>
                      <FormattedMessage id="homeheader.Functional_foods" />
                    </p>
                  </a>
                </div>
                <div className="child_content">
                  <p>
                    <FormattedMessage id="homeheader.Pharmaceutical_product" />
                  </p>
                </div>
                <div className="child_content">
                  <a href="#Map">
                    <p>
                      <FormattedMessage id="homeheader.Map" />
                    </p>
                  </a>
                </div>
              </div>
              <div className="right_content">
                <div className="cart">
                  <i class="fas fa-shopping-cart navication-cart__shop__input">
                    <span className="cart-text">
                      <FormattedMessage id="homeheader.cart" />
                    </span>
                    <div className="navication-cart__shop-icon">
                      <header class="navication-cart__header">
                        <span>
                          <FormattedMessage id="homeheader.add_new" />
                        </span>
                      </header>
                      <ul class="navication-cart-list">
                        {/* <button
                                className="btn shopping-cart-btn"
                                onClick={() =>
                                  setCartVisible(true)
                                }>
                                <GiShoppingBag size={24} />
                                {productsInCart.length >
                                  0 && (
                                  <span className="product-count">
                                    {
                                      productsInCart.length
                                    }
                                  </span>
                                )}
                              </button>
                               */}
                      </ul>
                      <footer class="header__navication-footer">
                        <a href="" class="header__navication-footer-btn">
                          <FormattedMessage id="homeheader.View_cart" />
                        </a>
                      </footer>
                    </div>
                  </i>
                </div>
                <div
                  className={
                    language === languages.VI ? "flag-vn active" : "flag-vn"
                  }
                >
                  <span onClick={() => this.Changelanguage(languages.VI)}>
                    VN
                  </span>
                </div>
                <div
                  className={
                    language === languages.EN ? "flag-en active" : "flag-en"
                  }
                >
                  <span onClick={() => this.Changelanguage(languages.EN)}>
                    EN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangelanguageApp: (language) => dispatch(ChangelanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
