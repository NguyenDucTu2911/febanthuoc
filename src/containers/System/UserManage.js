import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../SystemScss/UserManage.scss';
import {hendlegetUser, createNewUser, DeleteUser} from '../../services/userService';
import ModalUser from './ModalUser';


class UserManage extends Component {

    //init
    constructor(props){
        super(props);
        this.state={
            arrUser: [],
            isOpenModalUser: false,
        }
    }
    //gán giá trị
    async componentDidMount() {
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


    hendleAddUser = ()=>{
       this.setState({
            isOpenModalUser: true,
       })
    }

    toggleUserModal =()=>{
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
       })
    }

    createUser = async(data)=>{
        try{
            let response = await createNewUser(data)
            if(response && response.message.errCode !==0){
                alert(response.message.errMessage)
            }else{
                await this.getAllFormUser();
                this.setState({
                    isOpenModalUser: false,
               })
            }

        }catch(e){
            console.log(e)
        }
    }

    hendalDleteUser = async (users)=>{
        console.log(users)
        try{
            let res = await DeleteUser(users.id)
            if(res && res.message.errCode === 0 ){
                await this.getAllFormUser();
            }else{
                alert(res.message.errMessage)
            }

        }catch(e){
            console.log(e)
        }
    }

    render() {
        let arrUser = this.state.arrUser
        return (
            <div className="Manageusers">
               <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleUserModal = {this.toggleUserModal}
                    createUser = {this.createUser}
               />
               
                <div className='Manageusers-content'>
                    <h1 className='Manageusers-title'>MANAGE USERS</h1>
                </div>
                <div className='create'>
                    <button className='btn btn-primary px-3'
                    onClick={()=>this.hendleAddUser()}
                    >
                    <i className="fas fa-plus icon"></i>
                    Thêm tài khoản</button>
                </div>
                <table>
                    <tbody>
                        <tr  className='taitle'>
                            <th>Sô Tài Khoản</th>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Giới Tính</th>
                            <th>Ngày Sinh</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Quyền</th>
                            <th>action</th>
                        </tr>
                        {arrUser && arrUser.map((item, index)=>{
                                return(
                                    <>
                                    <tr className='item'>
                                        <td>{item.id}</td>
                                        <td>{item.TaiKhoan}</td>
                                        <td>{item.HoTen}</td>
                                        <td>{item.GioiTinh}</td>
                                        <td>{item.NgaySinh}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.SoDT}</td>
                                        <td>{item.DiaChi}</td>
                                        <td>{item.Quyen}</td>
                                        <td>
                                            <button className='btn-edit'>
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
                </table>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
