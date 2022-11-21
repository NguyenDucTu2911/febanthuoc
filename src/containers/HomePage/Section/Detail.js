import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Detail.scss";
import { Button } from "reactstrap";
import HomeHeader from "../HomeHeader";
import { getDetailMec } from "../../../services/userService";
import ModaCart from "./Modal/ModaCart";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailThuoc: [],
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

  render() {
    let { detailThuoc } = this.state;
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
                  <Button>Mua Ngay</Button>
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
        </div>

        <ModaCart />
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
