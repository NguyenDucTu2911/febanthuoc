import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  Table,
} from "reactstrap";
import "./sale.scss";

import { languages } from "../../../utils/constant";
import * as action from "../../../store/actions";
import { hendleALLKhachHang } from "../../../services/userService";

class sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GioiTinhArr: [],
      ROLEArr: [],
      arrUser: [],
    };
  }

  async componentDidMount() {
    this.props.getGioiTinh();
    this.props.getRole();
    await this.getAllFormUser();
  }

  getAllFormUser = async () => {
    let response = await hendleALLKhachHang("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUser: response.data,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.GioiTinhRedux !== this.props.GioiTinhRedux) {
      this.setState({
        GioiTinhArr: this.props.GioiTinhRedux,
      });
    }
    if (prevProps.RoleRedux !== this.props.RoleRedux) {
      this.setState({
        ROLEArr: this.props.RoleRedux,
      });
    }
  }

  render() {
    let GioiTinhs = this.state.GioiTinhArr;
    let ROLEs = this.state.ROLEArr;
    let language = this.props.language;
    let arrUser = this.state.arrUser;
    return (
      <div className="sale-body">
        <Form>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="HoTen">Thuoc</Label>
                <Input id="HoTen" name="HoTen" type="text" />
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="SDT">SoLo</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="SDT">NgaySX</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="SDT">HanSD</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={1}>
              <FormGroup>
                <Label for="SDT">SoLuongNhap</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="SDT">NhaPhanPhoi</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="SDT">ThanhTien</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Button style={{ marginTop: 12, padding: 2 }}>Lưu</Button>
        </Form>
        <Table bordered hover responsive size="">
          <thead>
            <tr>
              <th>Tên Thuốc</th>
              <th>Nha San Xuat</th>
              <th>So lo</th>
              <th>NgaySX</th>
              <th>HanSD</th>
              <th>So Luong Nhap</th>
              <th>Thanh Tien</th>
            </tr>
          </thead>
          <tbody>
            <tr className="item">
              <td>
                Thuốc kem bôi Agiclovir 10% Agimexpharm điều trị nhiễm Herpes
                Simplex (5g)
              </td>
              <td>viet nam</td>
              <td>123</td>
              <td>23-11-2022</td>
              <td>23-11-2025</td>
              <td>200</td>
              <td>200.000.000</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => this.hendleEditUser()}
                >
                  <i className="fas fa-user-edit edit-item"></i>
                </button>

                <button
                  className="btn-delete"
                  onClick={() => this.hendalDleteUser()}
                >
                  <i className="far fa-trash-alt delete-item"></i>
                </button>
              </td>
            </tr>
            <tr className="item">
              <td>
                Thuốc Febuxotid 40mg An Thiên điều trị tăng acid uric máu (3 vỉ
                x 10 viên)
              </td>
              <td>viet nam</td>
              <td>123</td>
              <td>23-11-2022</td>
              <td>23-11-2025</td>
              <td>50</td>
              <td>100.000.000</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => this.hendleEditUser()}
                >
                  <i className="fas fa-user-edit edit-item"></i>
                </button>

                <button
                  className="btn-delete"
                  onClick={() => this.hendalDleteUser()}
                >
                  <i className="far fa-trash-alt delete-item"></i>
                </button>
              </td>
            </tr>
            {/* {arrUser &&
              arrUser.map((item, index) => {
                return (
                  <>
                    <tr className="item">
                      <td>{item.HoTen}</td>
                      <td>{item.SoDT}</td>
                      <td>{item.DiaChi}</td>
                      <td>{item.Email}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.hendleEditUser(item)}
                        >
                          <i className="fas fa-user-edit edit-item"></i>
                        </button>

                        <button
                          className="btn-delete"
                          onClick={() => this.hendalDleteUser(item)}
                        >
                          <i className="far fa-trash-alt delete-item"></i>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })} */}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    GioiTinhRedux: state.admin.GioiTinhs,
    RoleRedux: state.admin.ROLEs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGioiTinh: () => dispatch(action.fetchGenderStart()),
    getRole: () => dispatch(action.fetchRoleStart()),
    // ChangelanguageApp: (language) => dispatch(ChangelanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sale);
