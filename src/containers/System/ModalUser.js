import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button ,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import{emitter} from '../../utils/emitter';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: '',
            MatKhau: '',
            HoTen: '',
            Email: '',
            GioiTinh: '',
            NgaySinh: '',
            SoDT: '',
            DiaChi: '',
            idCV: '',
            Quyen: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter(){
        emitter.on('EVEN_CLEAR_MODAL_DATA', ()=>{
            this.setState({
                TaiKhoan: '',
                MatKhau: '',
                HoTen: '',
                Email: '',
                GioiTinh: '',
                NgaySinh: '',
                SoDT: '',
                DiaChi: '',
                idCV: '',
                Quyen: '',
            })
        })
    }
    componentDidMount() {
    }

    toggle =()=>{
        this.props.toggleUserModal();
    }
    hendalOnChaneInput =(even, id)=>{
        let copyState = {...this.state}
        copyState[id] = even.target.value;
       
        this.setState({
            ...copyState  
        })
    }

    hendalAddUser =()=>{
        let check = this.checkValidateInput();
        if(check === true){
            this.props.createUser(this.state)
        }
    }

    checkValidateInput=()=>{
        let isvalid = true;
        let arr = ['TaiKhoan', 'MatKhau', 'HoTen','Email' ,'GioiTinh','NgaySinh' ,
        'SoDT','DiaChi','idCV','Quyen'];
        for(let i = 0; i < arr.length ; i++){
            if(!this.state[arr[i]]){
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
    }

    render() {
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}} 
            className={'modalUserContainer'}
            size='lg'
            centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Thêm Người Dùng
                    <button className='btn-closeModal' 
                    onClick={()=>{this.toggle()}}>
                    <i className="fas fa-times-circle close-modal"></i>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className='modalUserBody'>
                        <div className='item'>
                            <div className='inputContainer'>
                                <label>Tài Khoản</label>
                                <input type='text' 
                                onChange={(even)=> {this.hendalOnChaneInput(even,'TaiKhoan')}}
                                value={this.state.TaiKhoan}  
                                ></input>
                            </div>

                            <div className='inputContainer'>
                                <label>Mật Khẩu</label>
                                <input type='password' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'MatKhau')}}
                                value={this.state.MatKhau}     
                                ></input>
                            </div>
                        </div>
                        
                       
                        <div className='item'>
                            <div className='inputContainer'>
                                <label>Họ Tên</label>
                                <input type='text' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'HoTen')}}
                                value={this.state.HoTen}
                                ></input>
                            </div>

                            <div className='inputContainer'>
                                <label>Email</label>
                                <input type='email' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'Email')}}
                                value={this.state.Email} 
                                ></input>
                            </div>
                        </div>

                        <div className='item'>
                            <div className='inputContainer'>
                                <label for="inputState">Giới Tính</label>
                                <select name="GioiTinh" id="inputState" className="form-control" 
                                    onChange={(even)=> {this.hendalOnChaneInput(even, 'GioiTinh')}}
                                    value={this.state.GioiTinh} 
                                    >
                                <option value="DEFAULT" selected>Chọn...</option>
                                <option value="Nam" >Nam</option>
                                <option value="Nư" >Nữ</option>
                                </select>
                            </div>

                            <div className='inputContainer'>
                                <label>Ngày Sinh</label>
                                <input type='date' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'NgaySinh')}}
                                value={this.state.NgaySinh} 
                                ></input>
                            </div>
                        </div>

                        
                        <div className='item'>
                            <div className='inputContainer'>
                                <label>Số Điện Thoại</label>
                                <input type="tel" id="phone" name="phone" 
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'SoDT')}}
                                value={this.state.SoDT} 
                                ></input>
                            </div>

                            <div className='inputContainer'>
                                <label>Địa Chỉ</label>
                                <input type='text'
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'DiaChi')}}
                                value={this.state.DiaChi} 
                                ></input>
                            </div>
                        </div>
                        
                        <div className='item'>
                            <div className='inputContainer'>
                                <label>Chức Vụ</label>
                                <select name="cv" id="inputState" className="form-control"
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'idCV')}}
                                value={this.state.idCV} >
                                <option value="DEFAULT" selected>Chọn...</option>
                                <option value="1" >Giám Đốc</option>
                                <option value="2">Quản Lý</option>
                                <option value="3">Nhân Viên sale</option>
                                </select>
                            </div>

                            <div className='inputContainer'>
                            <label for="inputState">Quyền</label>
                                <select name="Quyen" id="inputState" className="form-control"
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'Quyen')}}
                                value={this.state.Quyen} >
                                <option value="DEFAULT"  selected>Chọn...</option>
                                <option value="R1">admin</option>
                                <option value="R2">Quản Lý</option>
                                <option value="R3">Nhân Viên</option>
                                </select>
                            </div>
                        </div>
                    </div>         
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-modal' color='primary' 
                        onClick={()=>{this.hendalAddUser()}}>Thêm</Button>{''}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



