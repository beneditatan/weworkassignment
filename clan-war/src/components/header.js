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
            'font-size': `${size}px`,
            'text-align': `${align}`
        };

        return (
            <div className='col-md-12' style={divStyle}>
                {children}
            </div>
        );
    }
}


export default Header;