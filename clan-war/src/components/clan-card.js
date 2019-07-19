import React, { Component } from 'react';
import ClanStat from './clan-stat'

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
                <ClanStat />
            </div>
        )
    }
}

export default ClanCard