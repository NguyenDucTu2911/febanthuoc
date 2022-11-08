import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { hendleLoginApi } from '../../services/userService';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            TaiKhoan:'',
            MatKhau:'',
        }
    }

    handleChangeTaiKhoan =(event) =>{
        this.setState({
            TaiKhoan: event.target.value
        })
    }
    handleChangeMatKhau =(event) =>{
        this.setState({
            MatKhau: event.target.value
        })
    }

    handlelogin = async()=>{
        this.setState({
            errMessage: ''
        })
        try{
            let data = await hendleLoginApi(this.state.TaiKhoan,this.state.MatKhau)
            if(data && data.errCode !==0){
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errCode ===0){
                console.log('thanh cong')
            }
        }catch(e){
            console.log(e.response)
            if(e.response){
                if(e.response.data){
                    this.setState({
                        errMessage: e.response.data.Message
                    })
                }
            }
        }
    }
    render() {
       return(
        <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row'>
                    <div className='col-12 text-center text-login'>Login</div>
                    <div className='col-12 form-group login-input'>
                        <lable>Tên Đăng Nhập</lable>
                        <input type='text' 
                            className='form-control' 
                            placeholder='nhập tên đăng nhập' 
                            value={this.state.TaiKhoan}
                            onChange={(event)=> this.handleChangeTaiKhoan(event)}
                            />
                    </div>
                    <div className='col-12 form-group login-input'>
                        <lable>Mật Khẩu</lable>
                        <input type='MatKhau' 
                        className='form-control' 
                        placeholder='nhập mật khẩu'
                        value={this.state.MatKhau}
                            onChange={(event)=> this.handleChangeMatKhau(event)}
                        />
                    </div>

                    <div className='col-12 ' style={{color:'red'}}>
                       {this.state.errMessage}
                    </div>

                    <div className='col-12 form-group'>
                        <button className='btn-login' onClick={()=> {this.handlelogin()}}>Đăng nhập</button>
                    </div>
                    <div className='col-12 text-center'>
                        <span className='forgotpass'>Quên mật khẩu ?</span>
                    </div>
                    <div className='col-12 text-center Or-login' >
                        <span>Hoạc:</span>
                    </div>
                    <div className='col-12 social-login' >
                        <i class="fab fa-google-plus social-google"></i>
                        <i class="fab fa-facebook social-facebook"></i>
                    </div>
                </div>
            </div>
           
        </div>
            

       )    
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
