import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ClanWrapper from './components/clan-wrapper';
import { CLANS } from './constants/clans';
import ClanStat from './components/clan-stat';

function App() {
  return (
    <div className="App">
      <Header size='48' align='center'>React War Room</Header>
      <Header size='24' align='left'>Allies</Header>
      <ClanWrapper clan={CLANS.REACT} />
      <Header size='24' align='left'>Enemies</Header>
      <ClanWrapper clan={CLANS.VUE} />
      <ClanWrapper clan={CLANS.ANGULAR} />
    </div>
  );
}

export default App;
