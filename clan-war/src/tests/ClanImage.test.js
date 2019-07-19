import React from 'react';
import ReactDOM from 'react-dom';
import ClanImage from '../components/clan-image';

it('ClanImage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
