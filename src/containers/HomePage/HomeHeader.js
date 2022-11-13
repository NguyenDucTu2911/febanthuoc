import React, { Component } from "react";
import { connect } from "react-redux";
import "./Section/HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant";
import { ChangelanguageApp } from "../../store/actions/appActions";
import title from "../../assets/images/title.png";

class HomeHeader extends Component {
  Changelanguage = (language) => {
    this.props.ChangelanguageApp(language);
  };
  render() {
    let language = this.props.language;
    return (
      <div className="HomeHeader-container">
        <div className="HomeHeader-content">
          <div className="HomeHeader-content_item">
            <div className="top_content">
              <div className="left_content">
                <div className="header-logo"></div>
              </div>
              <div className="center_content">
                <div className="child_content">
                  <p>
                    <FormattedMessage id="homeheader.Medicine" />
                  </p>
                </div>
                <div className="child_content">
                  <p>
                    <FormattedMessage id="homeheader.Functional_foods" />
                  </p>
                </div>
                <div className="child_content">
                  <p>
                    <FormattedMessage id="homeheader.Pharmaceutical_product" />
                  </p>
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
                            <li class="navication-cart-item">
                                <a href="" class="navication-cart-link">
                                <img
                                    src="./assets/css/img/mypham.jpg"
                                    alt=""
                                    class="header__notifiy-img"
                                />
                                <div class="navication-cart-info">
                                    <span class="navication-cart-descriotion">
                                        thuốc châu á
                                    </span>
                                    <span class="navication-cart__money">₫500.12</span>
                                </div>
                                </a>
                            </li>

                        <li class="navication-cart-item">
                            <a href="" class="navication-cart-link">
                            <img
                                src="./assets/css/img/nuochoa.png"
                                alt=""
                                class="header__notifiy-img"
                            />
                            <div class="navication-cart-info">
                                <span class="navication-cart-descriotion">
                                thuốc mỹ
                                </span>
                                <span class="navication-cart__money">₫500.12</span>
                            </div>
                            </a>
                        </li>
                        <li class="navication-cart-item">
                            <a href="" class="navication-cart-link">
                            <img
                                src="https://salt.tikicdn.com/cache/400x400/ts/product/20/80/fc/21dfb3d29d52b634698ab2af5cbfd770.jpg.webp"
                                alt=""
                                class="header__notifiy-img"
                            />
                            <div class="navication-cart-info">
                                <span class="navication-cart-descriotion">
                                thuốc âu
                                </span>
                                <span class="navication-cart__money">₫500.12</span>
                            </div>
                            </a>
                        </li>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangelanguageApp: (language) => dispatch(ChangelanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
