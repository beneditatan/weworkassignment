import React, { Component } from 'react';
import VoterImage from './voter-image'


class ClanVoter extends Component {
    constructor(props) {
        super(props)
    }

    render (){

        return (
            <div>
                <div className='row'>
                    <div className='col-md-4 offset-4' align='center'>
                        <VoterImage />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' align='center'>
                        <h5>voter name</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClanVoter