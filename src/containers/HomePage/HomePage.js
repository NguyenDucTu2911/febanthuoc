import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Banner from './Banner';
import Search from './Search'

class HomePage extends Component {

    render() {
       

        return (
            <div>
                <HomeHeader/>
                <Banner/>
                <Search/>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
