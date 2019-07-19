import React, { Component } from 'react';
import StatItem from './stat-item'

class ClanStat extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div className='col-md-12'>
                <StatItem />
                <StatItem />
                <StatItem />
                <StatItem />
            </div>
        )
    }
}

export default ClanStat