import React from 'react';
import ReactDOM from 'react-dom';
import ClanCard from '../components/clan-card';

it('ClanCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
