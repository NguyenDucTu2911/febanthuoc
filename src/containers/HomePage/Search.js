import React, { Component } from "react";
import { connect } from "react-redux";
import './Section/Search.scss';
import { FormattedMessage } from 'react-intl';

class Search extends Component {
  render() {
    return (
      <div className="section-search">
        <div className="search_content">
            <div className="search-title">
            <FormattedMessage id='homeheader.Drug_Lookup'/>
            </div>
            <div className="search">
                <div className="search-item">
                    <div className="search-left">
                        <input type='search' placeholder="Nhập từ khóa..." className="input-search"></input>
                    </div>
                    <div className="search-right">
                        <button className="btn-search">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="search-buttom">
                      <p className="search-buttom-text"><FormattedMessage id='homeheader.Top_Lookup'/></p>
                      <div className="buttom-item">
                        <button className='btn-search_item'>panadol</button>
                        <button className='btn-search_item'>vitamin</button>
                        <button className='btn-search_item'>khẩu trang</button>
                        <button className='btn-search_item'>nước muối</button>
                        <button className='btn-search_item'>xịt mũi</button>
                        <button className='btn-search_item'>bổ phổi</button>
                      </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
