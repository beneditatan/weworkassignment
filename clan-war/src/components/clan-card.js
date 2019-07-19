import React, { Component } from 'react';
import ClanStat from '../containers/clan-stat'
import ClanImage from './clan-image'
import { CLANS_DESCRIPTION } from '../constants/clans';

class ClanCard extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const divStyle = {
            'border': '1px',
            'borderStyle': 'solid',
            'marginLeft': '10px',
            'marginRight': '10px',
            'backgroundColor': '#F1F2EB'
        }

        const titleStyle = {
            'marginTop': '5px',
        }

        const fontStyle = {
            'color': '#4A4A48'
        }

        return (
            <div style={divStyle}>
                <div className='row' style={titleStyle}>
                    <div className='col-md-2'>
                        <ClanImage clan={this.props.clan} />
                    </div>
                    <div className='col-md-10' align='left' style={fontStyle}>
                        <div className='row'>
                            <h3>{this.props.clan.toUpperCase()}</h3>
                        </div>
                        <div className='row'>
                            <span>{CLANS_DESCRIPTION[this.props.clan]}</span>
                        </div>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ClanStat clan={this.props.clan}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default ClanCard