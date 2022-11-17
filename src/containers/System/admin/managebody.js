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
import "./Employee.scss";

import { languages } from "../../../utils/constant";
import * as action from "../../../store/actions";
import {hendlegetUser} from '../../../services/userService';

class Employee extends Component {
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

  getAllFormUser = async ()=>{
    let response = await hendlegetUser('ALL');
    if(response && response.errCode === 0){
        this.setState({
            arrUser: response.users,   
        })
    }
  }

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
    let arrUser = this.state.arrUser
    return (
      <div className="Employee-body">
        <Form>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Tài Khoản</Label>
                <Input
                  id="exampleEmail"
                  name="TaiKhoan"
                  placeholder="with a placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
            </Col>

            <Col md={4}>
              <FormGroup>
                <Label for="HoTen">Họ Tên</Label>
                <Input id="HoTen" name="HoTen" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="GioiTinh">Giới Tính</Label>
                <Input id="GioiTinh" name="GioiTinh" type="select">
                  {GioiTinhs &&
                    GioiTinhs.length > 0 &&
                    GioiTinhs.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.Value_vi
                            : item.Value_en}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="SDT">Số Điện Thoại</Label>
                <Input id="exaSDTmpleEmail" name="SDT" type="text" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleAddress">Địa Chỉ</Label>
                <Input id="DiaChi" name="DiaChi" placeholder="1234 Main St" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="ngaysimh">Ngày Sinh</Label>
                <Input id="ngaysimh" name="ngaysimh" type="date" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="idCV">Chức Vụ</Label>
                <Input id="idCV" name="idCV" type="select">
                  <option>Giám Đốc</option>
                  <option>Quản Lý</option>
                  <option>Nhân Viên</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="GioiTinh">Quyền</Label>
                <Input id="GioiTinh" name="GioiTinh" type="select">
                  {ROLEs &&
                    ROLEs.length > 0 &&
                    ROLEs.map((item, index) => {
                      return (
                        <option key={index}>
                          {language === languages.VI
                            ? item.Value_vi
                            : item.Value_en}
                        </option>
                      );
                    })}
                  {/* <option>
                    admin
                    </option>
                    <option>
                    Quản Lý
                    </option>
                    <option>
                    Nhân Viên
                    </option> */}
                </Input>
              </FormGroup>
            </Col>
          </Row>{" "}
          <Button style={{ marginTop: 12, padding: 2 }}>Lưu</Button>
        </Form>
        <Table bordered hover responsive size="">
          <thead>
            <tr>
              <th>Tài Khoản</th>
              <th>Họ Tên</th>
              <th>Giới Tính</th>
              <th>Số Điện Thoại</th>
              <th>Địa Chỉ</th>
              <th>Email</th>
              <th>Ngày Sinh</th>
              <th>Chức Vụ</th>
              <th>Quyền</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
           
            {arrUser && arrUser.map((item, index)=>{
                    return(
                        <>
                        <tr className='item'>
                            <td>{item.TaiKhoan}</td>
                            <td>{item.HoTen}</td>
                            <td>{item.GioiTinh}</td>
                            <td>{item.SoDT}</td>
                            <td>{item.DiaChi}</td>
                            <td>{item.Email}</td>
                            <td>{item.NgaySinh}</td>
                            <td>{item.idCV}</td>
                            <td>{item.Quyen}</td>
                            <td>
                                <button className='btn-edit'
                                onClick={()=>this.hendleEditUser(item)}>
                                    <i className="fas fa-user-edit edit-item"></i>
                                </button>

                                <button className='btn-delete'
                                onClick={()=>this.hendalDleteUser(item)}>
                                    <i className="far fa-trash-alt delete-item"></i>
                                </button>
                            </td>
                        </tr>
                        </>
                    )
                })
            }  

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

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
