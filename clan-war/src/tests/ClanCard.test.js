import React from 'react';
import ReactDOM from 'react-dom';
import ClanCard from '../components/clan-card';
import { CLANS } from '../constants/clans'
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('ClanCard renders without crashing', () => {
  const div = document.createElement('div');
  const clan = CLANS.REACT;
  ReactDOM.render(<ClanCard clan={clan}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanCard rendered with the correct styling', () => {
  const clan = CLANS.REACT;
  const border = '1px';
  const borderStyle = 'solid';
  const marginLeft = '10px';
  const marginRight = '10px';
  const { container } = render(<ClanCard clan={clan}/>);

  expect(container.firstChild).toHaveStyle(`border: ${border};`);
  expect(container.firstChild).toHaveStyle(`border-style: ${borderStyle};`);
  expect(container.firstChild).toHaveStyle(`margin-left: ${marginLeft};`);
  expect(container.firstChild).toHaveStyle(`margin-right: ${marginRight};`);
});

it('ClanCard contains ClanStat', () => {
  const clan = CLANS.REACT;
  const { container } = render(<ClanCard clan={clan}/>);
  const clanStatNode = container.querySelector('ClanStat');
  
  expect(clanStatNode).toBeDefined();
});

it('ClanCard contains ClanImage', () => {
  const clan = CLANS.REACT;
  const { container } = render(<ClanCard clan={clan}/>);
  const clanImageNode = container.querySelector('ClanImage');
  
  expect(clanImageNode).toBeDefined();
});
