import React from 'react';
import ReactDOM from 'react-dom';
import ClanCard from '../components/clan-card';
import { CLANS } from '../constants/clans'
import {
    render,
    cleanup,
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

afterEach(cleanup);

it('ClanCard renders without crashing', () => {
  const div = document.createElement('div');
  const clan = CLANS.REACT;
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanCard clan={clan}/>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanCard rendered with the correct styling', () => {
  const clan = CLANS.REACT;
  const border = '1px';
  const borderStyle = 'solid';
  const marginLeft = '10px';
  const marginRight = '10px';
  const { container } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanCard clan={clan}/>
    </Provider>);

  expect(container.firstChild).toHaveStyle(`border: ${border};`);
  expect(container.firstChild).toHaveStyle(`borderStyle: ${borderStyle};`);
  expect(container.firstChild).toHaveStyle(`marginLeft: ${marginLeft};`);
  expect(container.firstChild).toHaveStyle(`marginRight: ${marginRight};`);
});

it('ClanCard contains ClanStat', () => {
  const clan = CLANS.REACT;
  const { container } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanCard clan={clan}/>
    </Provider>);
  const clanStatNode = container.querySelector('ClanStat');
  
  expect(clanStatNode).toBeDefined();
});

it('ClanCard contains ClanImage', () => {
  const clan = CLANS.REACT;
  const { container } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanCard clan={clan}/>
    </Provider>);
  const clanImageNode = container.querySelector('ClanImage');
  
  expect(clanImageNode).toBeDefined();
});
