import React, { Component } from 'react';
import ClanStat from './clan-stat'

class ClanCard extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div className='col-md-12'>
                <ClanStat />
            </div>
        )
    }
}

export default ClanCard