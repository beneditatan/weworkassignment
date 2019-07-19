import React from 'react';
import ReactDOM from 'react-dom';
import VotersWrapper from '../components/voters-wrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VotersWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
