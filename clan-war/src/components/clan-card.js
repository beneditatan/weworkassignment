import React, { Component } from 'react';
import ClanStat from './clan-stat'
import ClanImage from './clan-image'
import { CLANS_DESCRIPTION } from '../constants/clans';

class ClanCard extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const divStyle = {
            'border': '1px',
            'border-style': 'solid',
            'margin-left': '10px',
            'margin-right': '10px'
        }

        const titleStyle = {
            'margin-top': '5px'
        }

        return (
            <div style={divStyle}>
                <div className='row' style={titleStyle}>
                    <div className='col-md-1'>
                        <ClanImage clan={this.props.clan} />
                    </div>
                    <div className='col-md-11' align='left'>
                        <div className='row'>
                            <h3>{this.props.clan.toUpperCase()}</h3>
                        </div>
                        <div className='row'>
                            <span>{CLANS_DESCRIPTION[this.props.clan]}</span>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <ClanStat />
                </div>
            </div>

        )
    }
}

export default ClanCard