import React, { Component } from 'react';

class Header extends Component {
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