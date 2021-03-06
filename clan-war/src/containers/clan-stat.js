import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReactStat,  fetchVueStat, fetchAngularStat} from '../actions';
import StatItem from '../components/stat-item'
import { CLANS } from '../constants/clans'

class ClanStat extends Component {
    componentDidMount(){
        this.props.fetchReactStat();
        this.props.fetchVueStat();
        this.props.fetchAngularStat();
    }
    
    render () {
        switch(this.props.clan){
            case CLANS.REACT:
                var clanStat =  this.props.reactStat;
                break;
            case CLANS.VUE:
                var clanStat =  this.props.vueStat;
                break;
            case CLANS.ANGULAR:
                var clanStat =  this.props.angularStat;
                break;
            default:
                console.log("invalid clan")
                var clanStat = {
                    stargazers_count: 0,
                    forks_count: 0,
                    open_issues_count: 0
                }
                break;
        }
        

        return (
            <div className='row'>
                <div className='col-md-4' data-testid='stat-item'>
                    <StatItem value={clanStat.stargazers_count} 
                    unit="Stargazer(s)" />
                </div>
                <div className='col-md-4' data-testid='stat-item'>
                    <StatItem value={clanStat.forks_count} unit="Fork(s)"/>
                </div>
                <div className='col-md-4' data-testid='stat-item'>
                    <StatItem value={clanStat.open_issues_count} unit="Open Issue(s)"/>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchReactStat, fetchVueStat, fetchAngularStat}, dispatch);
  }

function mapStateToProps({ reactStat, angularStat, vueStat }){
    return { reactStat, angularStat, vueStat };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ClanStat);

