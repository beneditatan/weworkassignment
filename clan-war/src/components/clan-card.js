import React, { Component } from 'react';
import ClanStat from './clan-stat'
import ClanImage from './clan-image'

class ClanCard extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const divStyle = {
            'border': '1px',
            'border-style': 'solid'
        }

        return (
            <div className='col-md-12' style={divStyle}>
                <div className='row'>
                    <ClanImage clan={this.props.clan} />
                </div>
                <ClanStat />
            </div>
        )
    }
}

export default ClanCard