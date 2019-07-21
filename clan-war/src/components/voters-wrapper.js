import React, { Component } from 'react';
import ClanVoter from './clan-voter'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers} from '../actions';
import { CLANS } from '../constants/clans';
import _ from 'lodash';

class VotersWrapper extends Component {
    constructor(props) {
        super(props)

        this.generateItems = this.generateItems.bind(this);
    }

    componentDidMount(){
        this.props.fetchReactStargazers();
        this.props.fetchVueStargazers();
        this.props.fetchAngularStargazers();
    }

    generateItems(stargazers){

        console.log(stargazers)
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
        switch(this.props.clan){
            case CLANS.REACT:
                var clanStargazers =  this.props.reactStargazers;
                break;
            case CLANS.VUE:
                var clanStargazers =  this.props.vueStargazers;
                break;
            case CLANS.ANGULAR:
                var clanStargazers =  this.props.angularStargazers;
                break;
            default:
                console.log("invalid clan")
                break;
        }

        return (
            <div className='row'>
                {this.generateItems(clanStargazers.users)}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers}, dispatch);
  }

function mapStateToProps({ reactStargazers, vueStargazers, angularStargazers }){
    return { reactStargazers, vueStargazers, angularStargazers };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(VotersWrapper);