import React, { Component } from 'react';

class StatItem extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div align='center'>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        )
    }
}

export default StatItem