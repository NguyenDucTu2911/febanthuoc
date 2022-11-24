import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "./importgoods.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { report, GetAllthuocId } from "../../../services/userService";
import * as actions from "../../../store/actions";
import moment from "moment/moment";

class importgoods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PRdate: "",
      data: "",
      startDate: moment(new Date()).startOf("day").valueOf(),
    };
  }

  heandonchageDateOickr = (date) => {
    console.log(date);
    this.setState({
      startDate: date,
    });
  };

  async componentDidMount() {
    await this.getAllFormThuoc();
    this.props.allthuoc();
    
  }
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
    console.log("hello", data);
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
            </div>
            <div className="body-table">
              <table>
                <tr>
                  <th>Họ Tên</th>
                  <th>Địa Chỉ</th>
                  <th>Email</th>
                  <th>SL</th>
                  <th>Ngày Xuất</th>
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
                          <td>{item.KhachHang.Email}</td>
                          <td>{item.CTPhieuXuat.SoLuongXuat}</td>
                          <td>{date}</td>
                          <td>{item.CTPhieuXuat.ThanhTien}</td>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allthuoc: () => dispatch(actions.allthuoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(importgoods);
