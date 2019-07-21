import React, { Component } from 'react';
import ClanVoter from './clan-voter'
import _ from 'lodash';

class VotersWrapper extends Component {
    constructor(props) {
        super(props)

        this.generateItems = this.generateItems.bind(this);
    }

    generateItems(stargazers){
        const items = _.map(stargazers, (gazer) => 
            <div className='col-md-4' key={gazer.id}>
                <ClanVoter key={gazer.id} 
                    imgSrc={gazer.avatar_url}
                    login={gazer.login}
                    url={gazer.html_url}
                />
            </div>
        )
        return items;
    }

    render (){
        console.log(this.props.clanStargazers)

        const divStyle = {
            marginTop: '20px',
            color: '#4A4A48'
        }

        return (
            <div className='row' style={divStyle}>
                <div className='col-md-12' align='center'>
                    <h2>{this.props.clan[0].toUpperCase() + this.props.clan.substr(1)} Stargazers</h2>
                </div>
                {this.generateItems(this.props.clanStargazers.users)}
            </div>
        )
    }
}


export default VotersWrapper;