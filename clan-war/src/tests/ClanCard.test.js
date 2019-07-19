import React from 'react';
import ReactDOM from 'react-dom';
import ClanCard from '../components/clan-card';
import CLANS from '../constants/clans'
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('ClanCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClanCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanCard rendered with the correct styling', () => {
  const clan = CLANS.REACT;
  const border = '1px';
  const borderStyle = 'solid'
  const { container } = render(<ClanCard clan={clan}/>);

  expect(container.firstChild).toHaveStyle(`border: ${border};`);
  expect(container.firstChild).toHaveStyle(`border-style: ${borderStyle};`);
});