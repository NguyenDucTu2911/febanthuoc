import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "./reportThuoc.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  report,
  hendlegetThuoc,
  getDetailMec,
} from "../../../services/userService";
import * as actions from "../../../store/actions";
import moment from "moment/moment";
import Select from "react-select";

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
    console.log(date);
    this.setState({
      startDate: date,
    });
  };

  async componentDidMount() {
    await this.getAllFormThuoc();
    this.props.allthuoc();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.allThuoc.data);

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
  handleChange = async (selectedOption) => {
    this.setState({ selectedOption });
    let res = await getDetailMec(selectedOption.value);
    if (res && res.errCode === 0 && res.data && res.data.Contents) {
      let content = res.data.Contents;
      this.setState({
        contentHtml: content.ContentsHTML,
        contentMar: content.MAK,
      });
    } else {
      this.setState({
        contentMar: "",
        contentHtml: "",
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
              </div>
            </div>
            <div className="body-table">
              <table>
                <tr>
                  <th>Tên Thuốc</th>
                  <th>Đơn giá</th>
                  <th>DVT</th>
                  <th>Số Lượng</th>
                  <th>Số Đăng Ký</th>
                </tr>

                {products &&
                  products.map((item, index) => {
                    return (
                      <>
                        <tr className="item">
                          <td>{item.TenThuoc}</td>
                          <td>{item.DonGia}</td>
                          <td>{item.DVT}</td>
                          <td>{item.SoLuong}</td>
                          <td>{item.SoDangKy}</td>
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
