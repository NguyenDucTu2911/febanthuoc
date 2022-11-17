import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {hendlegetThuoc, createNewMedicine, DeleteUser, editUsersv} from '../../../services/userService';
import ModalEditUser from '../ModalEditUser';
import{emitter} from '../../../utils/emitter'
import '../admin/medicine.scss'
import ModaMedicine from '../ModaMedicine';

class Medicine extends Component {

    //init
    constructor(props){
        super(props);
        this.state={
            products: [],
            isOpenmodaMedicine: false,
        }
    }
    //gán giá trị
    async componentDidMount() {
      await this.getAllFormThuoc();
    }
  
    getAllFormThuoc = async ()=>{
      let response = await hendlegetThuoc('ALL');
      if(response && response.errCode === 0){
          this.setState({
            products: response.data,   
          })
      }
    }

    //hendle

    hendleAddUser = ()=>{
       this.setState({
            isOpenmodaMedicine: true,
       })
    }

    //togede
    toggleThuocModal =()=>{
        this.setState({
          isOpenmodaMedicine: !this.state.isOpenmodaMedicine,
       })
    }

    createThuoc = async(data)=>{
        try{
            let response = await createNewMedicine(data)
            if(response && response.message.errCode !==0){
                alert(response.message.errMessage)
            }else{
                await this.getAllFormUser();
                this.setState({
                  isOpenmodaMedicine: false,
               })
            }
            emitter.emit('EVEN_CLEAR_MODAL_DATA')
        }catch(e){
            console.log(e)
        }
    }

    editUser = async(data)=>{
        try{
            let response = await editUsersv(data)
            console.log(response)
            if(response && response.message.errCode !==0){
                alert(response.message.errMessage)
            }else{
                await this.getAllFormUser();
                this.setState({
                    isOpenModalEditUser: false,
               })
            }
        }catch(e){
            console.log(e)
        }
    }
    
    render() {
        let products = this.state.products
        console.log(products)
        return (
            <div className="Manageusers">
               <ModaMedicine
                    isOpen={this.state.isOpenmodaMedicine}
                    toggleThuocModal = {this.toggleThuocModal}
                    createThuoc = {this.createThuoc}
               />
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    toggleUserModal = {this.toggleEditUserModal}
                    curentUser = {this.state.UserEdit}
                    editUser ={this.editUser}
               />
                }
               
                <div className='Manageusers-content'>
                    <h1 className='Manageusers-title'>MANAGE USERS</h1>
                </div>
                <div className='create'>
                    <button className='btn btn-primary px-3'
                    onClick={()=>this.hendleAddUser()}
                    >
                    <i className="fas fa-plus icon"></i>
                    Thêm Thu</button>
                </div>
                <table>
                    <tbody>
                        <tr  className='taitle'>
                            <th>Tên Thuốc</th>
                            <th>Dạng Bào Chế</th>
                            <th>Tác dụng</th>
                            <th>Thành Phần Chính</th>
                            <th>Độ Tuổi</th>
                            <th>Đơn giá</th>
                            <th>DVT</th>
                            <th>Số Lượng</th>
                            <th>Quy Cách</th>
                            <th>Chỉ Dịnh</th>
                            <th>Thuốc Cần Kê Toa</th>
                            <th>Chống Chỉ Định</th>
                            <th>Số Đăng Ký</th>
                            <th>action</th>
                        </tr>
                        {products && products.map((item, index)=>{
                                return(
                                    <>
                                    <tr className='item'>
                                        <td>{item.TenThuoc}</td>
                                        <td>{item.DangBaoChe}</td>
                                        <td>{item.TacDung}</td>
                                        <td>{item.ThanhPhanChinh}</td>
                                        <td>{item.DoTuoi}</td>
                                        <td>{item.DonGia}</td>
                                        <td>{item.DVT}</td>
                                        <td>{item.SoLuong}</td>
                                        <td>{item.QuyCach}</td>
                                        <td>{item.ChiDinh}</td>
                                        <td>{item.ThuocCanKeToa}</td>
                                        <td>{item.ChongChiDinh}</td>
                                        <td>{item.SoDangKy}</td>
                        
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

export default connect(mapStateToProps, mapDispatchToProps)(Medicine);
