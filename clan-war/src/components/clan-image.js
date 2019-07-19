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
            'marginTop': '5px',
            'marginLeft': '5px',
            'marginRight': '5px',
            // 'background-color': '#4A4A48'
        }

        const imgStyle = {
            'maxWidth': '90%',
            'maxHeight': '90%'
        }

        return (
            <div style={divStyle} align='center'>
                <img src={CLANS_IMAGE[this.props.clan]} style={imgStyle}></img>
            </div>
        )
    }
}

export default ClanImage