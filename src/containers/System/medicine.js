import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../SystemScss/medicine.scss';

class medicine extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="medicine">
                <div className='medicine-title'>
                    <h1 className='medicine-title_text'>Quản lý Thuốc</h1>
                </div>
            </div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(medicine);
