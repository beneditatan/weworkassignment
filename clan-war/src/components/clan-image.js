import React, { Component } from 'react';
import { CLANS_IMAGE } from '../constants/clans'

class ClanImage extends Component {
    render (){
        const divStyle = {
            'width': '100%',
            'height': '100px',
            'overflow': 'hidden',
            'marginTop': '5px',
            'marginLeft': '5px',
            'marginRight': '5px',
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