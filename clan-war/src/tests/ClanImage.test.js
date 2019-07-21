import React from 'react';
import ReactDOM from 'react-dom';
import ClanImage from '../components/clan-image';
import { CLANS }  from '../constants/clans'
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

it('ClanImage renders without crashing', () => {
  const div = document.createElement('div');
  const clan = CLANS.REACT;
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanImage clan={clan}/>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanImage rendered with the correct styling', () => {
  const clan = CLANS.REACT;
  const width = '100%';
  const overflow = 'hidden';
  const marginTop = '5px';
  const marginLeft = '5px';
  const marginRight = '5px';
  const { container } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanImage clan={clan}/>
    </Provider>);

  expect(container.firstChild).toHaveStyle(`width: ${width};`);
  expect(container.firstChild).toHaveStyle(`overflow: ${overflow};`);
  expect(container.firstChild).toHaveStyle(`marginTop: ${marginTop};`);
  expect(container.firstChild).toHaveStyle(`marginTop: ${marginLeft};`);
  expect(container.firstChild).toHaveStyle(`marginTop: ${marginRight};`);
});
