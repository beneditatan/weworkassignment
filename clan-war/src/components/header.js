import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        size: PropTypes.string,
        align: PropTypes.string
    }

    render() {
        const { size, align, children } = this.props;
        
        const divStyle = {
            'fontSize': `${size}px`,
            'textAlign': `${align}`,
            'marginTop': `20px`,
            'marginLeft': '1px'
        };

        return (
            <div className='row' style={divStyle}>
                <div className='col-md-12'>{children}</div>
            </div>
        );
    }
}


export default Header;