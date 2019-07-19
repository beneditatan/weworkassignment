import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import ClanWrapper from './components/clan-wrapper'

function App() {
  return (
    <div className="App">
      <Header size='48' align='center'>React War Room</Header>
      <Header size='24' align='left'>Allies</Header>
      <ClanWrapper>React here</ClanWrapper>
      <Header size='24' align='left'>Enemies</Header>
      <ClanWrapper>Vue here</ClanWrapper>
      <ClanWrapper>Angular here</ClanWrapper>
    </div>
  );
}

export default App;
