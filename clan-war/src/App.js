import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
function App() {
  return (
    <div className="App">
      <Header size='48' align='center'>React War Room</Header>
      <Header size='24' align='left'>Allies</Header>
      <div className='wrapper col-md-12' id='react-wrapper' align='left'>
        React here
      </div>
      <Header size='24' align='left'>Enemies</Header>
      <div className='wrapper col-md-12' id='vue-wrapper' align='left'>
        Vue here
      </div>
      <div className='wrapper col-md-12' id='angular-wrapper' align='left'>
        Angular here
      </div>
    </div>
  );
}

export default App;
