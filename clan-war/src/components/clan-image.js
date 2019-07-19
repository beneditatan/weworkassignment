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
            // 'border': '1px',
            // 'border-style': 'solid',
            'margin-top': '5px',
            'margin-left': '5px',
            'margin-right': '5px',
            // 'background-color': '#4A4A48'
        }

        const imgStyle = {
            'max-width': '90%',
            'max-height': '90%'
        }

        return (
            <div style={divStyle} align='center'>
                <img src={CLANS_IMAGE[this.props.clan]} style={imgStyle}></img>
            </div>
        )
    }
}

export default ClanImage