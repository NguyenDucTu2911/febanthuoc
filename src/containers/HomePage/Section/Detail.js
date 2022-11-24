import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Detail.scss";
import { Button } from "reactstrap";
import HomeHeader from "../HomeHeader";
import { getDetailMec } from "../../../services/userService";
import ModaCart from "./Modal/ModaCart";
import Comment from "./SocialPlugin/Comment";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailThuoc: [],
      isOpenModal: false,
      dataThuoc: [],
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
    let { detailThuoc, isOpenModal, dataThuoc } = this.state;
    // let cur = this.process.env.REACT_APP_IS_LOCALHOST == true ?
    // "https://developers.facebook.com/apps/430806935750472/app-review/permissions/": window.location.href;

    // console.log(detailThuoc.Contents.ContentsHTML)
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
                    <span className="body-price">{detailThuoc.DonGia}đ /</span>
                    <span className="body-loai">{detailThuoc.QuyCach}</span>
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
                  <Button
                  // onClick={() => this.props.AddCart(detailThuoc)}
                  >
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
            {/* <Comment dataHref={cur} width={"80%"} /> */}
          </div>
        </div>

        <ModaCart
          isOpenModal={isOpenModal}
          closeModa={this.closeModa}
          dataThuoc={dataThuoc}
        />
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
