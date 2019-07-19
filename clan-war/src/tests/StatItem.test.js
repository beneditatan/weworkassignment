import React from 'react';
import ReactDOM from 'react-dom';
import StatItem from '../components/clan-stat';

it('StatItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
