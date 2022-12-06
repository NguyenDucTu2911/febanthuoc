import React, { Component } from "react";
import { connect } from "react-redux";
import "./Search.scss";
import { FormattedMessage } from "react-intl";
import "./MedicineFe.scss";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div className="home-page__new">
        <div className="home-page__nav">
          <nav className="home-page__nav-herder" style={{ top: "56px" }}>
            <ul className="home-page__nav-content">
              <li className="home-page__nav-list">
                <span style={{ color: "#000000e6" }}>
                  <FormattedMessage id="homeheader.Medicine" />
                </span>
              </li>

              <li className="home-page__nav-list">
                <div
                  className="FA284N N-5qHu"
                  style={{ background: "rgb(238, 77, 45)" }}
                ></div>
                <div className="home-page__nav-list--img">
                  <span>
                    <FormattedMessage id="homeheader.Together" />
                  </span>
                </div>
              </li>
            </ul>
          </nav>

          <div className="home-page__new-content">
            <div className="home-page__new-item home-page__new-hr">
              <Link to="/detail">
                {/* <a href='' className="home-page__new-content--link"> */}
                <div className="home-page__new-content--item">
                  <div className="home-page__new-flashsale">
                    <div className="home-page__new-jmg">
                      <div className="home-page__new-jmg">
                        <img
                          src="https://bom.so/REzrUv"
                          alt=""
                          className="home-page__new-jmg--anh"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="home-page__new--discount__content">
                    Viên Ngậm Ho Bách Bộ Mom And Baby Tất Thành Giảm Đau Rát
                    Họng, Giảm Họ (104 Viên)
                  </div>

                  <div className="home-page__new--discount">
                    <div className="home-page__new__item--price">
                      <span className="home-page__new__item-₫">₫</span>
                      <span className="home-page__new__item-money">
                        760.000
                      </span>
                    </div>
                    <div className="home-page__new__item--purchases">
                      <FormattedMessage id="homeheader.Sold" />: 900k
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </Link>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/04/00030510-lacto-biomin-gold-new-hdpharma-5x10-5318-607c_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên Ngậm Ho Bách Bộ Mom And Baby Tất Thành Giảm Đau Rát Họng,
                  Giảm Họ (104 Viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/10/00029877-omega-3-for-kids-300mg-nutrimed-international-100v-6416-633e_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên Ngậm Ho Bách Bộ Mom And Baby Tất Thành Giảm Đau Rát Họng,
                  Giảm Họ (104 Viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/10/00502554-vien-uong-calci-nano-hai-thuong-vuong-60v-4738-635f_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên Ngậm Ho Bách Bộ Mom And Baby Tất Thành Giảm Đau Rát Họng,
                  Giảm Họ (104 Viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/04/00030511-lacto-biomin-gold-new-hdpharma-20-goi-2174-607c_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Cốm vi sinh Lacto Biomin Gold HdPharma tăng lợi khuẩn cho hệ
                  tiêu hóa (5g x 20 gói)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/10/00021988-anica-phytextra-60v-5137-6347_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên uống Anica Phytextra bổ sung canxi và vitamin D3 (60
                  viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2020/09/00345454-siro-an-ngon-healthy-new-kid-8980-5f62_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Siro Healthy New Kids hỗ trợ kích thích tiêu hóa, giúp ăn ngon
                  (120ml)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/06/00004719-maxx-hair-ngan-rung-toc-tri-hoi-dau-2998-62af_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên uống Maxxhair New Thái Minh hỗ trợ bảo vệ tóc, ngăn rụng
                  tóc, trị hói đầu (30 viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2022/06/00029537-khuong-thao-dan-120-vien-1996-62b0_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên xương khớp Khương Thảo Đan Thái Minh hỗ trợ giảm đau,
                  giảm các triệu chứng viêm và phục hồi sụn khớp (120 viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>

            <div className="home-page__new-item home-page__new-hr">
              <a href="" className="home-page__new-content--link">
                <div className="home-page__new-flashsale">
                  <div className="home-page__new-jmg">
                    <div className="home-page__new-jmg">
                      <img
                        src="https://images.fpt.shop/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com/images/product/2021/05/00030512-baywod-calcium-plus-hdpharma-60v-7518-6091_large.jpg"
                        alt=""
                        className="home-page__new-jmg--anh"
                      />
                    </div>
                  </div>
                </div>

                <div className="home-page__new--discount__content">
                  Viên uống Bawod Calcium Plus HdPharma giúp chắc khỏe xương (60
                  viên)
                </div>

                <div className="home-page__new--discount">
                  <div className="home-page__new__item--price">
                    <span className="home-page__new__item-₫">₫</span>
                    <span className="home-page__new__item-money">760.000</span>
                  </div>
                  <div className="home-page__new__item--purchases">
                    <FormattedMessage id="homeheader.Sold" />: 900k
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="home-page__new-footer">
            <div className="home-page__new-footer-btn">
              <FormattedMessage id="homeheader.See_also" />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
