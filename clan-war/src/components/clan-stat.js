import React, { Component } from 'react';
import StatItem from './stat-item'

class ClanStat extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div className='row'>
                <div className='col-md-3'><StatItem /></div>
                <div className='col-md-3'><StatItem /></div>
                <div className='col-md-3'><StatItem /></div>
                <div className='col-md-3'><StatItem /></div>
            </div>
        )
    }
}

export default ClanStat