import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/header';
import ClanWrapper from './components/clan-wrapper';
import { CLANS } from './constants/clans';
import VotersWrapper from './components/voters-wrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers} from './actions';


class App extends Component {
  componentDidMount(){
    // switch case
    this.props.fetchReactStargazers(this.props.reactStargazers.page);
    this.props.fetchVueStargazers(this.props.vueStargazers.page);
    this.props.fetchAngularStargazers(this.props.angularStargazers.page);
}

  render(){
    return (
      <div className="App">
        <Header size='48' align='center'>React War Room</Header>
        <Header size='24' align='left'>Allies</Header>
        <ClanWrapper clan={CLANS.REACT} clanStargazers={this.props.reactStargazers}/>
        
        <Header size='24' align='left'>Enemies</Header>
        <ClanWrapper clan={CLANS.VUE} clanStargazers={this.props.vueStargazers}/>
        <ClanWrapper clan={CLANS.ANGULAR} clanStargazers={this.props.angularStargazers}/>
        {/* <VotersWrapper clan={CLANS.REACT}/> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchReactStargazers,  fetchVueStargazers, fetchAngularStargazers}, dispatch);
  }

function mapStateToProps({ reactStargazers, vueStargazers, angularStargazers }){
    return { reactStargazers, vueStargazers, angularStargazers };
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(App);

