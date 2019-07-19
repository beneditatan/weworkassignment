import React, { Component } from 'react';
import ClanVoter from './clan-voter'


class VotersWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render (){
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <ClanVoter />
                </div>
                <div className='col-md-4'>
                    <ClanVoter />
                </div>
                <div className='col-md-4'>
                    <ClanVoter />
                </div>
            </div>
        )
    }
}

export default VotersWrapper