import React, { Component } from 'react';
import ClanCard from './clan-card'

class ClanWrapper extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const divStyle = {
            'text-align': 'left',
            'margin-top': '10px'
        }

        return (
            <div style={divStyle} data-testid='div-wrapper'>
                <ClanCard clan={this.props.clan} data-testid='clan-card'/>
            </div>
        )
    }
}

export default ClanWrapper