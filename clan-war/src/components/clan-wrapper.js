import React, { Component } from 'react';
import ClanCard from './clan-card'
import VotersWrapper from './voters-wrapper'

class ClanWrapper extends Component {
    constructor(props){
        super(props);

        this.state = {
            overview: true
        }

        this.toggleOverview = this.toggleOverview.bind(this)
    }

    toggleOverview() {
        this.setState(state => ({
            overview: !state.overview
        }));
    }

    render () {
        const divStyle = {
            'textAlign': 'left',
            'marginTop': '10px'
        }
        return (
            <div style={divStyle} data-testid='div-wrapper' onClick={this.toggleOverview}>
                {this.state.overview ? 
                <ClanCard clan={this.props.clan}
                data-testid='clan-card'/> : <VotersWrapper clan={this.props.clan}/>}
                
            </div>
        )
    }
}

export default ClanWrapper