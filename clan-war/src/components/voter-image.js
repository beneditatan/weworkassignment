import React, { Component } from 'react';


class VoterImage extends Component {
    constructor(props) {
        super(props)
    }

    render (){
        const divStyle = {
            'width': '100%',
            'height': '100px',
            'overflow': 'hidden',
            // 'border': '1px',
            // 'borderStyle': 'solid',
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