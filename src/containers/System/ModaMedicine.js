import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button ,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import{emitter} from '../../utils/emitter'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    Table,
  } from "reactstrap";
import CommonUtils from '../../utils/CommonUtils';

class ModaMedicine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TenThuoc: "",
            DangBaoChe : "",
            TacDung : "",
            ThanhPhanChinh : "",
            DoTuoi : "",
            DonGia : "",
            DVT : "",
            SoLuong : "",
            QuyCach : "",
            ChiDinh : "",
            ThuocCanKeToa : "",
            ChongChiDinh : "",
            SoDangKy : "",
            Anh: "",
            MaNhomThuoc : "",
            previewimgUrl:[],
        }
        this.listenToEmitter();
    }

    listenToEmitter(){
        emitter.on('EVEN_CLEAR_MODAL_DATA', ()=>{
            this.setState({
                TenThuoc: "",
                DangBaoChe : "",
                TacDung : "",
                ThanhPhanChinh : "",
                DoTuoi : "",
                DonGia : "",
                DVT : "",
                SoLuong : "",
                QuyCach : "",
                ChiDinh : "",
                ThuocCanKeToa : "",
                ChongChiDinh : "",
                SoDangKy : "",
                Anh: "",
                MaNhomThuoc : "",
            })
        })
    }
    componentDidMount() {
    }

    toggle =()=>{
        this.props.toggleThuocModal();
    }
    hendalOnChaneInput =(even, id)=>{
        let copyState = {...this.state}
        copyState[id] = even.target.value;
        this.setState({
            ...copyState  
        })
    }

    hendalOnChaneImg = async (event)=>{
        let data = event.target.files;
        let file = data[0];
        if(file){
            let base64 = await CommonUtils.getBase64(file)
            this.setState({
                Anh: base64
            })
        }
    }

    hendalAddThuoc =()=>{
        let check = this.checkValidateInput();
        if(check === true){
            this.props.createThuoc(this.state)
        }
    }

    checkValidateInput=()=>{
        let isvalid = true;
        let arr = ['TenThuoc','DangBaoChe','TacDung',
        'ThanhPhanChinh','DoTuoi','DonGia','DVT','SoLuong','QuyCach','ChiDinh','ThuocCanKeToa','ChongChiDinh',
      'SoDangKy','MaNhomThuoc'];
        for(let i = 0; i < arr.length ; i++){
            console.log(this.state[arr[i]],arr[i])
            if(!this.state[arr[i]]){
                isvalid = false;
                alert(`vui lòng nhập: ${arr[i]}`)
                break;
            }
        }
        return isvalid;
    }

    render() {
        let {TenThuoc,DangBaoChe,TacDung ,ThanhPhanChinh,DoTuoi,
            DonGia,DVT,SoLuong,QuyCach,ChiDinh,ThuocCanKeToa,ChongChiDinh,SoDangKy,Anh,
            MaNhomThuoc,} = this.state
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}} 
            className={'ModaMedicineContainer'}
            size='lg'
            centered
            >
            <ModalHeader toggle={()=>{this.toggle()}}>Thêm Thuốc
                <button className='btn-closeModal' 
                onClick={()=>{this.toggle()}}>
                <i className="fas fa-times-circle close-modal"></i>
                </button>
            </ModalHeader>
            <ModalBody>
            <Form>
                <Row>
                <Col md={4}>
                    <FormGroup>
                    <Label for="TenThuoc">Tên Thuốc</Label>
                    <Input id="TenThuoc" name="TenThuoc" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'TenThuoc')}}
                        value={TenThuoc}  
                    />           
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="DangBaoChe">Dang Bao Che</Label>
                    <Input id="DangBaoChe" name="DangBaoChe" type="text"
                        onChange={(even)=> {this.hendalOnChaneInput(even,'DangBaoChe')}}
                        value={DangBaoChe} />
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup>
                    <Label for="TacDung">Tac Dung</Label>
                    <Input id="TacDung" name="TacDung" type="text"
                    onChange={(even)=> {this.hendalOnChaneInput(even,'TacDung')}}
                        value={TacDung} />
                    </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <FormGroup>
                    <Label for="ThanhPhanChinh">Thanh Phan Chinh</Label>
                    <Input
                        id="ThanhPhanChinh"
                        name="ThanhPhanChinh"
                        type="text"
                        onChange={(even)=> {this.hendalOnChaneInput(even,'ThanhPhanChinh')}}
                        value={ThanhPhanChinh}
                    ></Input>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="DoTuoi">Do Tuoi</Label>
                    <Input id="DoTuoi" name="DoTuoi" type="text"
                    onChange={(even)=> {this.hendalOnChaneInput(even,'DoTuoi')}}
                        value={DoTuoi}/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="DonGia">Don Gia</Label>
                    <Input id="DonGia" name="DonGia" type="text"
                        onChange={(even)=> {this.hendalOnChaneInput(even,'DonGia')}}
                        value={DonGia}
                    />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="DVT">DVT</Label>
                    <Input id="DVT" name="DVT" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'DVT')}}
                        value={DVT}
                    />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="SoLuong">So Luong</Label>
                    <Input id="SoLuong" name="SoLuong" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'SoLuong')}}
                        value={SoLuong}
                    />
                    </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <FormGroup>
                    <Label for="QuyCach">Quy Cach</Label>
                    <Input id="QuyCach" name="QuyCach" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'QuyCach')}}
                        value={QuyCach}
                    />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="ChiDinh">Chi Dinh</Label>
                    <Input id="ChiDinh" name="ChiDinh" type="text"
                    onChange={(even)=> {this.hendalOnChaneInput(even,'ChiDinh')}}
                        value={ChiDinh} />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="ThuocCanKeToa">Thuoc Can Ke Toa</Label>
                    <Input id="ThuocCanKeToa" name="ThuocCanKeToa" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'ThuocCanKeToa')}}
                        value={ThuocCanKeToa}
                    />
                    </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={4}>
                    <FormGroup>
                    <Label for="ChongChiDinh">Chong Chi Dinh</Label>
                    <Input id="ChongChiDinh" name="ChongChiDinh" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'ChongChiDinh')}}
                        value={ChongChiDinh}
                    />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="SoDangKy">So Dang Ky</Label>
                    <Input id="SoDangKy" name="SoDangKy" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'SoDangKy')}}
                        value={SoDangKy}
                    />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="Anh">Anh</Label>
                    <div className='img'>
                    <Input id="Anh" name="Anh" type="file" 
                        onChange={(even)=> {this.hendalOnChaneImg(even,'Anh')}}
                        // value={Anh}
                    />
                    </div>
                    
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="MaNhomThuoc">Ma Nhom Thuoc</Label>
                    <Input id="MaNhomThuoc" name="MaNhomThuoc" type="text" 
                        onChange={(even)=> {this.hendalOnChaneInput(even,'MaNhomThuoc')}}
                        value={MaNhomThuoc}
                    />
                    </FormGroup>
                </Col>
                </Row>
            </Form>
            </ModalBody>
                <ModalFooter>
                    <Button className='btn-modal' color='primary' 
                        onClick={()=>{this.hendalAddThuoc()}}>Thêm</Button>{''}
                    <Button className='btn-modal' color='secondary' onClick={()=>{this.toggle()}}>Hủy</Button>
                </ModalFooter>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModaMedicine);



