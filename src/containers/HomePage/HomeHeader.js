import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section/HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils/constant';
import { ChangelanguageApp } from '../../store/actions/appActions';


class HomeHeader extends Component {
    Changelanguage = (language)=>{
       this.props.ChangelanguageAppRD(language)
    }
    render() {
        let language = this.props.language;
    
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
                                    <p><FormattedMessage id='homeheader.Medicine'/></p>
                                </div>
                                <div className='child_content'>
                                    <p><FormattedMessage id='homeheader.Functional_foods'/></p>
                                </div>
                                <div className='child_content'>
                                    <p><FormattedMessage id='homeheader.Pharmaceutical_product'/></p>
                                </div>
                             </div>
                            <div className='right_content'>
                                <div className='cart'>
                                    <i class="fas fa-shopping-cart"></i>
                                    <span className='cart-text'><FormattedMessage id='homeheader.cart'/></span>
                                </div>
                                <div className={language === language.VI ? 'flag-vn active': 'flag-vn'}>
                                    <span onClick={()=>this.Changelanguage(languages.VI)}>VN</span>
                                </div>
                                <div className={language === language.EN ? 'flag-en active': 'flag-en'}>
                                    <span onClick={()=>this.Changelanguage(languages.EN)}>EN</span>
                               </div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ChangelanguageAppRD: (language) => dispatch( ChangelanguageApp(language)),
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
