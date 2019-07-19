import React from 'react';
import ReactDOM from 'react-dom';
import VoterImage from '../components/voter-image';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VoterImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
