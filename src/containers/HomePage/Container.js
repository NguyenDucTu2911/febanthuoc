import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section/Container.scss';
import { FormattedMessage } from 'react-intl';

class Container extends Component {

    render() {
       

        return (
            <div className='Container'>
                <div className='Container-item'>
                    <div className='Container-text'>
                        <span className='Container_title'>
                        <FormattedMessage id='homeheader.Buy_drugs_easily_at_the_pharmacy'/>
                        </span>
                    </div>
                </div>
                <div className='Container-item'>
                    <div className='Container-body'>
                        <div className='Container-body_item'>
                            
                            <div className='img-info'>
                            <i className="fas fa-mobile-alt img-info-img"></i>
                            </div>
                            
                            <div className='Container-body_info'>
                                <h5 className='body_info-title'><FormattedMessage id='homeheader.PRESCRIPTION_CAPTURE'/></h5>
                                <span className='body_info-text'><FormattedMessage id='homeheader.simple_fast'/></span>
                            </div>
                        </div>
                        <div className='Container-body_item'>
                            <div className='img-info'>
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <div className='Container-body_info'>
                                <h5 className='body_info-title'>
                                <FormattedMessage id='homeheader.ENTER_CONTACT_INFORMATION'/></h5>
                                <span className='body_info-text'>
                                <FormattedMessage id='homeheader.for_ordering_advice'/>
                                </span>
                            </div>
                        </div>
                        <div className='Container-body_item'>
                             <div className='img-info'>
                             <i className="fas fa-phone"></i>
                            </div>
                            <div className='Container-body_info'>
                                <h5 className='body_info-title'>
                                <FormattedMessage id='homeheader.GET_A_QUOTE'/>
                                </h5>
                                <span className='body_info-text'>
                                <FormattedMessage id='homeheader.with_free_consultation'/>
                                </span>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
