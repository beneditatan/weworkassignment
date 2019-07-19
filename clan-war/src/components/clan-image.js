import React, { Component } from 'react';
import { CLANS_IMAGE } from '../constants/clans'

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
            'margin-right': '5px',
        }

        const imgStyle = {
            'max-width': '100%',
            'max-height': '100%'
        }

        return (
            <div style={divStyle}>
                <img src={CLANS_IMAGE[this.props.clan]} style={imgStyle}></img>
            </div>
        )
    }
}

export default ClanImage