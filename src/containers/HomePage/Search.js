import React, { Component } from "react";
import { connect } from "react-redux";
import './Section/Search.scss';

class Search extends Component {
  render() {
    return (
      <div className="section-search">
        <div className="search_content">
            <div className="search-title">
                Tra Cứu Thuốc, TPCN....
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
