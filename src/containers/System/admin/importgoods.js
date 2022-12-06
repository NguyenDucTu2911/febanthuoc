import React, { Component } from "react";
import { connect } from "react-redux";
import "./importgoods.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  report,
  GetAllthuocId,
  hendlegetThuoc,
} from "../../../services/userService";
import * as actions from "../../../store/actions";
import moment from "moment/moment";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import _ from "lodash";

class importgoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRdate: "",
      data: "",
      startDate: moment(new Date()).startOf("day").valueOf(),
      dataType: {},
    };
  }

  heandonchageDateOickr = (date) => {
    // let dateID = moment(new Date(date)).format("YYYY/MM/DD");
    // console.log(dateID);
    this.setState(
      {
        startDate: date[0],
      },
      () => {
        this.props.allthuoc();
        let { startDate } = this.state;
        let dateID = moment(new Date(startDate)).format("YYYY/MM/DD");
        this.getData(dateID);
      }
    );
  };

  async componentDidMount() {
    await this.getAllFormThuoc();
    this.props.allthuoc();
    // let { startDate } = this.state;
    // let dateID = moment(new Date(startDate)).format("YYYY/MM/DD");
    // console.log("sjasjjs", dateID);
    // this.getData(dateID);
  }
  // getData = async (dateID) => {
  //   let res = await hendlegetThuoc({
  //     NgayXuat: dateID,
  //   });
  //   if (res && res.errCode == 0) {
  //     this.setState({
  //       dataType: res.data,
  //     });
  //   }
  // };

  componentDidUpdate(prevProps, prevState, snapshot) {}

  getAllFormThuoc = async () => {
    let response = await GetAllthuocId();
    if (response && response.errCode === 0) {
      this.setState({
        data: response.data,
      });
    }
  };

  render() {
    let { data } = this.state.data;
    console.log(this.state.data);
    return (
      <div className="importgoods">
        <div className="container">
          <div className="header">
            <div className="herder-title">
              <h3 className="title">Đơn hàng</h3>
            </div>
          </div>
          <div className="body">
            <div className="body-input">
              <label className="date-body">Ngày Đặt Hàng</label>
              <DatePicker
                className="form-contro"
                selected={this.state.startDate}
                onChange={this.heandonchageDateOickr}
                value={this.state.startDate}
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
            <div className="body-table">
              <table id="table-to-xls">
                <tr>
                  <th>Họ Tên</th>
                  <th>Địa Chỉ</th>
                  <th>SDT</th>
                  <th>Email</th>
                  <th>Ngày Xuất</th>
                  <th>SL</th>
                  <th>Gía</th>
                  <th>Thành Tiền</th>
                </tr>

                {data &&
                  data.map((item, index) => {
                    let date = moment(
                      new Date(item.CTPhieuXuat.createdAt)
                    ).format("DD/MM/YYYY");
                    return (
                      <>
                        <tr>
                          <td>{item.KhachHang.HoTen}</td>
                          <td>{item.KhachHang.DiaChi}</td>
                          <td>{item.KhachHang.SoDT}</td>
                          <td>{item.KhachHang.Email}</td>
                          <td>{date}</td>
                          <td>{item.CTPhieuXuat.SoLuongXuat}</td>
                          <td>{item.CTPhieuXuat.ThanhTien}</td>
                          <td>
                            {_.sum(
                              parseFloat(
                                item.CTPhieuXuat.ThanhTien *
                                  item.CTPhieuXuat.SoLuongXuat
                              ).toFixed(3)
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </table>
              <table style={{ width: "100%" }} id="table-to-xls">
                <tr>
                  <th
                    style={{
                      width: "89%",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Tổng Tiền
                  </th>
                  <td>
                    {_.sum(
                      _.map(data, (d) =>
                        parseFloat(
                          d.CTPhieuXuat.ThanhTien * d.CTPhieuXuat.SoLuongXuat
                        )
                      )
                    ).toFixed(3)}{" "}
                  </td>
                </tr>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allthuoc: () => dispatch(actions.allthuoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(importgoods);
