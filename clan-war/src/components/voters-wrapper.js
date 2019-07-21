import React, { Component } from 'react';
import ClanVoter from './clan-voter'
import { CLANS } from '../constants/clans'
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers} from '../actions';
import InfiniteScroll from 'react-simple-infinite-scroll'

class VotersWrapper extends Component {
    constructor(props) {
        super(props)

        this.generateItems = this.generateItems.bind(this);
        this.handleScroll = this.handleScroll.bind(this)
        
    }

    handleScroll(){
        if(this.scroller){
            if (this.scroller.offsetHeight + this.scroller.scrollTop >= this.scroller.scrollHeight) {
                const page = this.props.clanStargazers.page;
                switch(this.props.clan){
                    case CLANS.REACT:
                        this.props.fetchReactStargazers(page);
                        break;
                    case CLANS.VUE:
                        this.props.fetchVueStargazers(page);
                        break;
                    case CLANS.ANGULAR:
                        this.props.fetchAngularStargazers(page);
                        break;
                    default:
                        console.log("invalid clan")
                }
                
            }
        }
      }

    generateItems(stargazers){
        const items = _.map(stargazers, (gazer, index) => 
            <div className='col-md-4' key={index}>
                <ClanVoter key={index} 
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
            color: '#4A4A48',
            overflowY: 'auto',
            maxHeight: '500px'
        }

        return (
            <div className='row' style={divStyle}
            onScroll={this.handleScroll} 
            ref={(scroller) => {this.scroller = scroller}}
            id='voter-wrapper'>
                <div className='col-md-12' align='center'>
                    <h2>{this.props.clan[0].toUpperCase() + this.props.clan.substr(1)} Stargazers</h2>
                </div>
                {this.generateItems(this.props.clanStargazers.users)}
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers}, dispatch);
  }

// function mapStateToProps({ reactStargazers, vueStargazers, angularStargazers }){
//     return { reactStargazers, vueStargazers, angularStargazers };
// }

export default connect(null, mapDispatchToProps)(VotersWrapper);