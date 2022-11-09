import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../SystemScss/UserManage.scss';
import {hendlegetUser} from '../../services/userService'
class UserManage extends Component {

    //init
    constructor(props){
        super(props);
        this.state={
            arrUser: [],
        }
    }
    //gán giá trị
    async componentDidMount() {
        let response = await hendlegetUser('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUser: response.users,   
            })
        }
    }


    render() {
        console.log(this.state.arrUser)
        let arrUser = this.state.arrUser
        return (
            <div className="Manageusers">
                <div className='Manageusers-content'>
                    <h1 className='Manageusers-title'>MANAGE USERS</h1>
                </div>
                <table>
                    <tr  className='taitle'>
                        <th>Sô Tài Khoản</th>
                        <th>Tài Khoản</th>
                        <th>Quyền</th>
                        <th>Ngày Tạo</th>
                        <th>Ngày Cập Nhật</th>
                        <th>action</th>
                    </tr>
                    {
                        arrUser && arrUser.map((item, index)=>{
                            return(
                                <>
                                <tr className='item'>
                                    <td>{item.id}</td>
                                    <td>{item.TaiKhoan}</td>
                                    <td>{item.Quyen}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>
                                        <button className='btn-edit'>
                                            <i className="fas fa-user-edit"></i>
                                        </button>
                                        <button className='btn-delete'>
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }      
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
