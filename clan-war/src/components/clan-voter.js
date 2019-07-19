import React, { Component } from 'react';
import VoterImage from './voter-image'


class ClanVoter extends Component {
    constructor(props) {
        super(props)
    }

    render (){

        return (
            <div className='row'>
                <div className='col-md-4'>
                    <VoterImage />
                </div>
                <div className='col-md-8'>
                    <h5>voter name</h5>
                </div>
            </div>
        )
    }
}

export default ClanVoter