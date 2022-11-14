import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import '../../SystemScss/medicine.scss';

class medicine extends Component {

    state = {

    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="medicine">
                <div className='medicine-title'>
                    <h1 className='medicine-title_text'>Quản lý Thuốc</h1>
                </div>
                <div className="medicine-body">
          <Form>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleEmail">Tên Thuốc</Label>
                  <Input
                    id="exampleEmail"
                    name="TenThuoc"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="DangBaoChe">Dang Bao Che</Label>
                  <Input
                    id="DangBaoChe"
                    name="DangBaoChe"
                    type="text"
                  />
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label for="TacDung">Tac Dung</Label>
                  <Input id="TacDung" name="TacDung" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="ThanhPhanChinh">Thanh Phan Chinh</Label>
                  <Input id="ThanhPhanChinh" name="ThanhPhanChinh" type="text"></Input>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="DoTuoi">Do Tuoi</Label>
                  <Input id="DoTuoi" name="DoTuoi" type="text" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="DonGia">Don Gia</Label>
                  <Input id="DonGia" name="DonGia"  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="DVT">DVT</Label>
                  <Input
                    id="DVT"
                    name="DVT"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="SoLuong">So Luong</Label>
                  <Input id="SoLuong" name="SoLuong" type="nuber" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
              <FormGroup>
                  <Label for="QuyCach">Quy Cach</Label>
                  <Input id="QuyCach" name="QuyCach" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
              <FormGroup>
                  <Label for="ChiDinh">Chi Dinh</Label>
                  <Input id="ChiDinh" name="ChiDinh" type="text" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="ThuocCanKeToa">Thuoc Can Ke Toa</Label>
                  <Input
                    id="ThuocCanKeToa"
                    name="ThuocCanKeToa"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="ChongChiDinh">Chong Chi Dinh</Label>
                  <Input id="ChongChiDinh" name="ChongChiDinh" type="text" />
                </FormGroup>
              </Col>
              <Col md={2}>
              <FormGroup>
                  <Label for="SoDangKy">So Dang Ky</Label>
                  <Input id="SoDangKy" name="SoDangKy" type="text" />
                </FormGroup>
              </Col>
              <Col md={2}>
              <FormGroup>
                  <Label for="ChiDinh">Anh</Label>
                  <Input id="ChiDinh" name="ChiDinh" type="text" />
                </FormGroup>
              </Col>
              <Col md={2}>
              <FormGroup>
                  <Label for="MaNhomThuoc">Ma Nhom Thuoc</Label>
                  <Input id="MaNhomThuoc" name="MaNhomThuoc" type="text" />
                </FormGroup>
                </Col>
            </Row>
            {" "}
            <Button style={{ marginTop: 12, padding: 2 }}>Lưu</Button>
          </Form>
        </div>
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(medicine);
