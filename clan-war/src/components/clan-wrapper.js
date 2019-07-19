import React, { Component } from 'react';
import ClanCard from './clan-card'

class ClanWrapper extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div className='col-md-12'>
                {this.props.children}
                <ClanCard />
            </div>
        )
    }
}

export default ClanWrapper