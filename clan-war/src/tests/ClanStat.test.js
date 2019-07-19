import React from 'react';
import ReactDOM from 'react-dom';
import ClanStat from '../components/clan-stat';

it('ClanStat renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanStat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
