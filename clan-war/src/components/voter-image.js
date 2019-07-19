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
            'border': '1px',
            'borderStyle': 'solid',
            'marginTop': '5px',
            'marginLeft': '5px',
            'marginRight': '5px',
        }

        return (
            <div style={divStyle}>
                Voter Image Here
            </div>
        )
    }
}

export default VoterImage