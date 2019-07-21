import React, { Component } from 'react';
import ClanCard from './clan-card'

class ClanWrapper extends Component {
    render () {
        const divStyle = {
            'textAlign': 'left',
            'marginTop': '10px',
        }
        return (
            <div style={divStyle} data-testid='div-wrapper' >
                <ClanCard clan={this.props.clan}
                data-testid='clan-card'
                clanStargazers={this.props.clanStargazers}
                />
            </div>
        )
    }
}

export default ClanWrapper