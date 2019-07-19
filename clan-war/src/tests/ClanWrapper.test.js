import React from 'react';
import ReactDOM from 'react-dom';
import ClanWrapper from '../components/clan-card';

it('ClanWrapper renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
