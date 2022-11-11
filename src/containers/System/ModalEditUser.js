import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button ,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import _ from 'lodash';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            TaiKhoan: '',
            HoTen: '',
            Email: '',
            GioiTinh: '',
            NgaySinh: '',
            SoDT: '',
            DiaChi: '',
            idCV: '',
            Quyen: '',
        }
    }

    componentDidMount() {
        let {curentUser}=this.props;
        if(curentUser && !_.isEmpty(curentUser)){
            this.setState({
                id: curentUser.id,
                TaiKhoan: curentUser.TaiKhoan,
                HoTen: curentUser.HoTen,
                Email: curentUser.Email,
                GioiTinh: curentUser.GioiTinh,
                NgaySinh: curentUser.NgaySinh,
                SoDT: curentUser.SoDT,
                DiaChi:curentUser.DiaChi,
                idCV: curentUser.idCV,
                Quyen: curentUser.Quyen,
            })
        }
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

    hendalSave =()=>{
        let check = this.checkValidateInput();
        if(check === true){
            this.props.editUser(this.state)
        }
    }

    checkValidateInput=()=>{
        let isvalid = true;
        let arr = ['TaiKhoan','HoTen','Email',
        'SoDT','DiaChi','idCV','Quyen'];
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
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}} 
            className={'modalUserContainer'}
            size='lg'
            centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Thay Đổi Thông Tin Người Dùng
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
                                <label>Họ Tên</label>
                                <input type='text' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'HoTen')}}
                                value={this.state.HoTen}
                                ></input>
                            </div>  
                        </div>
                        
                       
                        <div className='item'>
                            <div className='inputContainer'>
                                <label>Email</label>
                                <input type='email' 
                                onChange={(even)=> {this.hendalOnChaneInput(even, 'Email')}}
                                value={this.state.Email} 
                                ></input>
                            </div>
                            <div className='inputContainer'>
                                <label for="inputState">Giới Tính</label>
                                <select name="GioiTinh" id="inputState" className="form-control" 
                                    onChange={(even)=> {this.hendalOnChaneInput(even, 'GioiTinh')}}
                                    value={this.state.GioiTinh} 
                                    >
                                <option value="DEFAULT" selected>Chọn...</option>
                                <option value="0" >Nam</option>
                                <option value="1" >Nữ</option>

                                </select>
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
                                <option value="1">admin</option>
                                <option value="2">Quản Lý</option>
                                <option value="3">Nhân Viên</option>
                                </select>
                            </div>
                        </div>
                    </div>
                            
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-modal' color='primary' 
                        onClick={()=>{this.hendalSave()}}>Lưu</Button>{''}
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



