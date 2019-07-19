import React from 'react';
import ReactDOM from 'react-dom';
import ClanVoter from '../components/clan-voter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanVoter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
