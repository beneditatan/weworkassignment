import React from 'react';
import ReactDOM from 'react-dom';
import ClanStat from '../containers/clan-stat';
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

it('ClanStat renders without crashing', () => {
  const div = document.createElement('div');
  const clan = CLANS.REACT;
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanStat clan={clan}/>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanStat renders with 3 StatItems', () => {
  const clan = CLANS.REACT;
  const { getAllByTestId } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanStat clan={clan}/>
    </Provider>);

  const statItemNodes = getAllByTestId('stat-item');

  expect(statItemNodes.length).toBe(3)
});
