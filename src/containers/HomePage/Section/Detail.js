import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Detail.scss";
import { Button } from "reactstrap";
import HomeHeader from "../HomeHeader";
import { getDetailMec } from "../../../services/userService";
import ModaCart from "./Modal/ModaCart";
import Comment from "./SocialPlugin/Comment";
import Likes from "./SocialPlugin/likes";
import Foorerfe from "../Foorerfe";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailThuoc: [],
      isOpenModal: false,
      dataThuoc: [],
      cart: [],
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailMec(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailThuoc: res.data,
        });
      }
    }
    // this.props.actFetchProductsRequest();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }

  AddCart(data) {
    console.log("hihih", data);
    let cartItem = this.state.cart;
    let productID = data.id;
    let TenThuoc = data.TenThuoc;
    let Anh = data.Anh;
    let DonGia = data.DonGia;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex((x) => x.id == productID);
      cartItem[index].DonGia = (
        Number(cartItem[index].DonGia) + Number(DonGia)
      ).toFixed(3);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(data);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    setTimeout(
      function () {
        this.setState({
          cartBounce: false,
          quantity: 1,
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }

  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total,
    });
  }

  heandclick(data) {
    this.setState({
      isOpenModal: true,
      dataThuoc: data,
    });
  }

  closeModa = () => {
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    let { detailThuoc, isOpenModal, dataThuoc, cart } = this.state;
    let cur =
      process.env.REACT_APP_IS_LOCALHOST === 1
        ? "https://96df-203-205-27-251.ap.ngrok.io/"
        : window.location.href;
    console.log("hello", cur);

    return (
      <React.Fragment>
        <HomeHeader />
        <div className="Detail">
          <div className="Detail-title">
            <div
              className="title-img"
              style={{ backgroundImage: `url(${detailThuoc.Anh})` }}
            ></div>
            <div className="title-content">
              <div className="content-title">
                <span className="title-item">{detailThuoc.TenThuoc}</span>
              </div>

              <div className="container">
                <div className="content-body">
                  <div className="price-loai">
                    <Likes />
                  </div>
                  <div className="price-loai">
                    <span className="body-price">{detailThuoc.DonGia}đ </span>
                    <span className="body-loai">/ {detailThuoc.QuyCach}</span>
                  </div>
                  <div className="body-loai">
                    <div className="loai-danmuc">
                      Thành Phần Chính:
                      <span className="loai-item">
                        {detailThuoc.ThanhPhanChinh}
                      </span>
                    </div>
                    <div className="loai-danmuc">
                      Dạng bào chế:
                      <span className="loai-item">
                        {detailThuoc.DangBaoChe}
                      </span>
                    </div>
                    <div className="loai-danmuc">
                      Độ Tuổi:
                      <span className="loai-item">{detailThuoc.DoTuoi}</span>
                    </div>
                    <div className="loai-danmuc">
                      Chống Chỉ Định:
                      <span className="loai-item">
                        {detailThuoc.ChongChiDinh}
                      </span>
                    </div>
                    <div className="loai-danmuc">
                      Thuốc Cần Kê Toa:
                      <span className="loai-item">
                        {detailThuoc.ThuocCanKeToa}
                      </span>
                    </div>
                    <div className="loai-danmuc">
                      Công dụng:
                      <span className="loai-item">{detailThuoc.TacDung}</span>
                    </div>
                  </div>
                </div>
                <div className="content-foodter">
                  <Button onClick={() => this.AddCart(detailThuoc)}>
                    Thêm Hàng
                  </Button>
                  <Button onClick={() => this.heandclick(detailThuoc)}>
                    Mua Ngay
                  </Button>
                </div>
              </div>
            </div>
            <div className="Detail-body"></div>
          </div>
          <div className="content-detail">
            {detailThuoc &&
              detailThuoc.Contents &&
              detailThuoc.Contents.ContentsHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailThuoc.Contents.ContentsHTML,
                  }}
                ></div>
              )}
          </div>
          <div className="comment">
            <Comment dataHref={cur} width={"100%"} />
          </div>
        </div>

        <ModaCart
          isOpenModal={isOpenModal}
          closeModa={this.closeModa}
          dataThuoc={dataThuoc}
          cart={cart}
        />
        <Foorerfe />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default Detail;
