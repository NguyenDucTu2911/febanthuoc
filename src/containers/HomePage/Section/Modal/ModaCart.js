import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ModaCart.scss";
import { QuantityPicker } from "react-qty-picker";
import { portCart } from "../../../../services/userService";
import LoadingOverlay from "react-loading-overlay";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
} from "reactstrap";
import _, { times } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ModaCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HoTen: "",
      DiaChi: "",
      SoDT: "",
      Email: "",
      idNV: "",
      NgayXuat: new Date(),
      GioXuat: "",
      MaThuoc: "",
      SoLuongXuat: 1,
      ThanhTien: "",
      ThanhToan: "",
      isShowLoading: false,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.dataThuoc !== this.props.dataThuoc) {
      if (this.props.dataThuoc && !_.isEmpty(this.props.dataThuoc)) {
        let id = this.props.dataThuoc.id;
        let dongia = this.props.dataThuoc.DonGia;
        this.setState({
          MaThuoc: id,
          ThanhTien: dongia,
          ThanhToan: dongia,
        });
      }
    }
  }

  // sum(item) {
  //   if (item) {
  //     let tong = 0;
  //     tong += item;
  //     this.setState({
  //       Sum: tong,
  //     });
  //   }
  //   console.log("dongia", item);
  // }

  Heandonchage(event, id) {
    let valueinput = event.target.value;
    let statecopy = { ...this.state };
    statecopy[id] = valueinput;
    this.setState({
      ...statecopy,
    });
  }

  checkValidateInput = () => {
    let isvalid = true;
    let arr = [
      "HoTen",
      "DiaChi",
      "SoDT",
      "Email",
      " idNV",
      "NgayXuat",
      "GioXuat",
      " MaThuoc",
      "SoLuongXuat",
      "ThanhTien",
      "ThanhToan",
    ];
    for (let i = 0; i < arr.length; i++) {
      if (!this.state[arr[i]]) {
        isvalid = false;
        toast.error(`vui lòng nhập: ${arr[i]}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        break;
      }
    }
    return isvalid;
  };

  heandclick = async () => {
    this.setState({
      isShowLoading: true,
    });
    let res = await portCart({
      HoTen: this.state.HoTen,
      DiaChi: this.state.DiaChi,
      SoDT: this.state.SoDT,
      Email: this.state.Email,
      idNV: this.state.idNV,
      NgayXuat: this.state.NgayXuat,
      GioXuat: this.state.GioXuat,
      MaThuoc: this.state.MaThuoc,
      SoLuongXuat: this.state.SoLuongXuat,
      ThanhTien: this.state.ThanhTien,
      ThanhToan: this.state.ThanhToan,
    });
    this.setState({
      isShowLoading: false,
    });
    if (res && res.errCode === 0) {
      toast.success("mua hàng thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });

      this.props.closeModa();
    } else {
      toast.error("Không Thể Thanh Toán", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  render() {
    let { isOpenModal, closeModa, dataThuoc } = this.props;
    return (
      <LoadingOverlay
        active={this.state.isShowLoading}
        spinner
        text="Loading..."
      >
        <Modal
          isOpen={isOpenModal}
          // toggle={this.toggle}
          className={"CartModal"}
          size="lg"
          centered
        >
          <div className="modal-content">
            <div className="modal-herder">
              <span className="modal_text">
                Giỏ Hàng
                <div className="modal_close" onClick={closeModa}>
                  <i class="far fa-times-circle"></i>
                </div>
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-item">
                <div className="item-content">
                  <div
                    className="item-img"
                    style={{ backgroundImage: `url(${dataThuoc.Anh})` }}
                  ></div>
                  <div className="item-name">
                    {dataThuoc.TenThuoc}
                    {/* <div className="App">
                    <input
                      type="button"
                      id="firstminus"
                      value="-"
                      onclick={() => this.minusNum1()}
                    />
                    <input type="text" id="firstvalue" value="1" />
                    <input
                      type="button"
                      id="firstadd"
                      value="+"
                      onclick={() => this.addNum1()}
                    />
                 
              
                  </div> */}
                  </div>

                  <div className="item-price">{dataThuoc.DonGia} ₫</div>
                </div>
              </div>
              <div className="body-TT">
                <div className="body-conten">
                  <div className="TT-item">
                    <Form>
                      <FormGroup>
                        <Label for="exampleEmail">Họ Tên:</Label>
                        <Input
                          name="HoTen"
                          value={this.state.HoTen}
                          onChange={(event) =>
                            this.Heandonchage(event, "HoTen")
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email:</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="abc@gmail.com"
                          type="Email"
                          value={this.state.Email}
                          onChange={(event) =>
                            this.Heandonchage(event, "Email")
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Địa Chỉ:</Label>
                        <Input
                          name="DiaChi"
                          value={this.state.DiaChi}
                          onChange={(event) =>
                            this.Heandonchage(event, "DiaChi")
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Số Điện Thoại:</Label>
                        <Input
                          name="SoDT"
                          value={this.state.SoDT}
                          onChange={(event) => this.Heandonchage(event, "SoDT")}
                        />
                      </FormGroup>
                    </Form>
                  </div>
                  <div className="Price-sum">
                    <div className="content-containr">
                      <div className="sum-title">Thành Tiền</div>
                      <div className="sum">
                        <span className="sum-total">Tổng Tiền:</span>
                        <span className="sum-total-d">
                          {dataThuoc.DonGia} VND
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-foodter">
              <div className="btn-DH">
                <button className="button-tt" onClick={() => this.heandclick()}>
                  Mua Hàng
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModaCart);
