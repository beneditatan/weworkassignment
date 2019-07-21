import React, { Component } from 'react';
import VoterImage from './voter-image'


class ClanVoter extends Component {
    constructor(props) {
        super(props)
    }

    render (){
        const divStyle = {
            marginBottom: '20px',
            
        }
        const fontStyle = {
            color: '#4A4A48'
        }
        return (
            <div style={divStyle}>
                <div className='row' >
                    <div className='col-md-4 offset-4' align='center'>
                        <VoterImage imgSrc={this.props.imgSrc} url={this.props.url}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' align='center'>
                        <a href={this.props.url} style={fontStyle}>{this.props.login}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClanVoter