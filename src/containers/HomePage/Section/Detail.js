import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Detail.scss";
import { Button } from "reactstrap";
class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
       
    }
  }

  async componentDidMount() {
  }
  
  render() {
    return (
      <div className="Detail">
        <div className="Detail-title">
            <div className="title-img">
            
            </div>
            <div className="title-content">
                <div className="content-title">
                    <span className="title-item">
                    Siro bổ phế Bối Mẫu Forte Mom And Baby Tất Thành hỗ trợ giảm ho, đau rát họng, khản tiếng (125ml)
                    </span>
                </div>
                <div className="content-body">
                <div className="price-loai">
                    <span className="body-price">49.000đ</span>
                    <span className="body-loai">chai</span>
                </div>
                <div className="body-loai">
                  <div className="loai-danmuc">Danh mục:
                  <span className="loai-item">Hô hấp, ho, xoang</span>
                  </div>
                  <div className="loai-danmuc">Dạng bào chế:
                  <span className="loai-item">Dung dịch</span> 
                  </div>
                  <div className="loai-danmuc">Quy cách:
                  <span className="loai-item">1 Chai x 1 Chai</span> 
                  </div>
                  <div className="loai-danmuc">Xuất xứ thương hiệu:
                  <span className="loai-item">Việt Nam</span> 
                  </div>
                  <div className="loai-danmuc">Nhà sản xuất:
                  <span className="loai-item">CN CTY CP DƯỢC PHẨM SYNTECH</span>
                  </div>
                  <div className="loai-danmuc">Công dụng:
                  <span className="loai-item"> Bối Mẫu Forte Tất Thành hỗ trợ bổ phổi ích phế, hỗ trợ giảm ho, đau rát họng, khản tiếng.</span>
                  </div>
                </div>
                <div className="content-foodter">
                <Button>
                  Thêm Hàng
                </Button>
                <Button>
                  Mua Ngay
                </Button>
                </div>
            </div>
        </div>
        <div className="Detail-body">
        </div>
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

export default Detail;