import React from 'react';
import ReactDOM from 'react-dom';
import ClanVoter from '../components/clan-voter';
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanVoter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanVoter contains VoterImage', () => {
    const { container } = render(<ClanVoter />);
    const voterImageNode = container.querySelector('VoterImage');
    
    expect(voterImageNode).toBeDefined();
  });