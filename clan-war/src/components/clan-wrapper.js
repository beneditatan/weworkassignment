import React, { Component } from 'react';
import ClanCard from './clan-card'

class ClanWrapper extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const divStyle = {
            'text-align': 'left'
        }

        return (
            <div className='col-md-12' style={divStyle} data-testid='div-wrapper'>
                {this.props.clan.toUpperCase()} Here
                <ClanCard clan={this.props.clan} data-testid='clan-card'/>
            </div>
        )
    }
}

export default ClanWrapper