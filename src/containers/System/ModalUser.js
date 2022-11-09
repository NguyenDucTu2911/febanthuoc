import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button ,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
    }

    toggle =()=>{
        this.props.toggleUserModal();
    }

    render() {
        console.log(this.props.isOpen)
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}} 
            className={'modalUserContainer'}
            size='lg'
            centered
            
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Thêm Tài Khoản
                    <button className='btn-closeModal' onClick={()=>{this.toggle()}}><i class="fas fa-times-circle close-modal"></i></button>
                </ModalHeader>
                <ModalBody>
                    <div className='modalUserBody'>
                        <div className='inputContainer'>
                            <label>Tài Khoản</label>
                            <input type='text'></input>
                        </div>

                        <div className='inputContainer'>
                            <label>Mật Khẩu</label>
                            <input type='password'></input>
                        </div>

                        <div className='inputContainer'>
                        <label for="inputState">Quyền</label>
                            <select name="Quyen" id="inputState" class="form-control">
                            <option value="1" selected>admin</option>
                            <option value="2">quanlys</option>
                            <option value="3">banhang</option>
                            </select>
                        </div>

                        <div className='inputContainer'>
                            <label>Mã Nhân Viên</label>
                            <input type='text'></input>
                        </div>
                    </div>
                            
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-modal' color='primary' onClick={()=>{this.toggle()}}>Thêm</Button>{''}
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



