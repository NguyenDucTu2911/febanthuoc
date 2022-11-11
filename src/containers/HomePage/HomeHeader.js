import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section/HomeHeader.scss';



class HomeHeader extends Component {

    render() {
    
        return (
            <div className="HomeHeader-container">
                <div className="HomeHeader-content">
                    <div className='HomeHeader-content_item'>
                        <div className='top_content'>
                            <div className='left_content'>
                                <div className='header-logo'>

                                </div>
                            </div>
                            <div className='center_content'>
                                <div className='child_content'>
                                    <p>Thuốc</p>
                                </div>
                                <div className='child_content'>
                                    <p>Thực Phẩm Chức Năng</p>
                                </div>
                                <div className='child_content'>
                                    <p>Dược Phẩm</p>
                                </div>
                             </div>
                            <div className='right_content'>
                                <div className='cart'>
                                    <i class="fas fa-shopping-cart"></i>
                                    <span className='cart-text'>Giỏ hàng</span>
                                </div>
                                <div className='flag'>VN</div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
