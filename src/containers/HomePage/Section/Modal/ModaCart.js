import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ModaCart.scss";
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
class ModaCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <Modal
        isOpen={true}
        // toggle={this.toggle}
        className={"CartModal"}
        size="lg"
        centered
      >
        <div className="modal-content">
          <div className="modal-herder">
            <span className="modal_text">
              Giỏ Hàng
              <div className="modal_close">
                <i class="far fa-times-circle"></i>
              </div>
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-item">
              <div className="item-content">
                <div className="item-img"></div>
                <div className="item-name"></div>
                <div className="item-price"></div>
              </div>
            </div>
            <div className="body-TT">
              <div className="body-conten">
                <div className="TT-item">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Họ Tên:</Label>
                      <Input name="HoTen" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email:</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="abc@gmail.com"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Địa Chỉ:</Label>
                      <Input name="DiaChi" />
                    </FormGroup>
                  </Form>
                </div>
                <div className="Price-sum">
                  <div className="content-containr">
                    <div className="sum-title">Thành Tiền</div>
                    <div className="sum">
                      <span className="sum-total">Tổng Tiền:</span>
                      <span className="sum-total-d">100.000 VND</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-foodter">
            <div className="btn-DH">
              <button className="button-tt">Mua Hàng</button>
            </div>
          </div>
        </div>
      </Modal>
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
