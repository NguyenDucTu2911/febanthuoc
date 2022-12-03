import React, { Component } from "react";
import { connect } from "react-redux";
import "./reportThuoc.scss";
import {
  report,
  hendlegetThuoc,
  getDetailMec,
} from "../../../services/userService";
import * as actions from "../../../store/actions";
import moment from "moment/moment";
import Select from "react-select";
import CommonUtils from "../../../utils/CommonUtils";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class reportThuoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRdate: "",
      data: "",
      listThuoc: [],
      startDate: moment(new Date()).startOf("day").valueOf(),
    };
  }

  heandonchageDateOickr = (date) => {
    this.setState({
      startDate: date,
    });
  };

  async componentDidMount() {
    await this.getAllFormThuoc();
    this.props.allthuoc();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allThuoc !== this.props.allThuoc) {
      let dataSelect = this.buidDataInput(this.props.allThuoc.data);
      this.setState({
        listThuoc: dataSelect,
      });
    }
  }
  buidDataInput = (data) => {
    let result = [];
    if (data && data.length > 0) {
      data.map((item, index) => {
        let object = {};
        let thuoc = `${item.TenThuoc}`;
        object.label = thuoc;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  getAllFormThuoc = async () => {
    let response = await hendlegetThuoc("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        products: response.data,
      });
    }
  };

  render() {
    let products = this.state.products;
    const { selectedOption } = this.state;
    return (
      <div className="reportThuoc">
        <div className="container">
          <div className="header">
            <div className="herder-title">
              <h3 className="title">Thuốc</h3>
            </div>
          </div>
          <div className="body">
            <div className="body-input">
              <label className="date-body">TÊN THUỐC</label>
              <div className="select3">
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={this.state.listThuoc}
                />
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="baocao"
                  sheet="tablexls"
                  buttonText="Export"
                />
              </div>
            </div>
            <div className="body-table">
              <table id="table-to-xls">
                <tr>Bảng Thống Kê Thuốc</tr>
                <tr>
                  <th>Tên Thuốc</th>
                  <th>Số Đăng Ký</th>
                  <th>Số Lượng</th>
                  <th>Đơn giá</th>
                  <th>DVT</th>
                </tr>

                {products &&
                  products.map((item, index) => {
                    return (
                      <>
                        <tr className="item">
                          <td>{item.TenThuoc}</td>
                          <td>{item.SoDangKy}</td>
                          <td>{item.SoLuong}</td>
                          <td>{item.DonGia}</td>
                          <td>{item.DVT}</td>
                        </tr>
                      </>
                    );
                  })}
              </table>
            </div>
          </div>
          <div className="fooder"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    allThuoc: state.admin.allThuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allthuoc: () => dispatch(actions.allthuoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reportThuoc);
