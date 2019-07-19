import React from 'react';
import ReactDOM from 'react-dom';
import ClanImage from '../components/clan-image';
import CLANS from '../constants/clans'
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('ClanImage renders without crashing', () => {
  const div = document.createElement('div');
  const clan = CLANS.REACT;
  ReactDOM.render(<ClanImage clan={clan}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanImage rendered with the correct styling', () => {
  const clan = CLANS.REACT;
  const width = '100%';
  const overflow = 'hidden';
  const marginTop = '5px';
  const marginLeft = '5px';
  const { container } = render(<ClanImage clan={clan}/>);

  // make sure its square
  // const height = container.firstChild.offsetWidth;

  expect(container.firstChild).toHaveStyle(`width: ${width};`);
  // expect(container.firstChild).toHaveStyle(`height: ${height};`);
  expect(container.firstChild).toHaveStyle(`overflow: ${overflow};`);
  expect(container.firstChild).toHaveStyle(`margin-top: ${marginTop};`);
  expect(container.firstChild).toHaveStyle(`margin-left: ${marginLeft};`);
});
