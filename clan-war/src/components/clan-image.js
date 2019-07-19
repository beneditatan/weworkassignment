import React, { Component } from 'react';


class ClanImage extends Component {
    constructor(props) {
        super(props)
    }

    render (){
        const divStyle = {
            'width': '100%',
            'height': '100px',
            'overflow': 'hidden',
            'border': '1px',
            'border-style': 'solid',
            'margin-top': '5px',
            'margin-left': '5px',
        }

        return (
            <div className='col-md-1' style={divStyle}>
                {this.props.clan.toUpperCase()} Image Here
            </div>
        )
    }
}

export default ClanImage