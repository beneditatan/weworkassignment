import React, { Component } from 'react';


class VoterImage extends Component {
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
            'maxWidth': '100%',
            'maxHeight': '100%'
        }

        return (
            <div style={divStyle}>
                <a href={this.props.url}>
                    <img src={this.props.imgSrc} style={imgStyle}></img>
                </a>
                
            </div>
        )
    }
}

export default VoterImage