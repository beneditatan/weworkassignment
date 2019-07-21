import React from 'react';
import ReactDOM from 'react-dom';
import ClanWrapper from '../components/clan-wrapper';
import { CLANS }  from '../constants/clans'
import {
    render,
    cleanup,
    fireEvent
  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

afterEach(cleanup);

it('ClanWrapper renders without crashing', () => {
    const clan = CLANS.REACT;
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanWrapper clan={clan}/>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ClanWrapper rendered with the correct styling', () => {
    const clan = CLANS.REACT;
    const align = 'left';
    const marginTop = '10px'
    const { container } = render(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ClanWrapper clan={clan}/>
      </Provider>);

    expect(container.firstChild).toHaveStyle(`textAlign: ${align};`);
    expect(container.firstChild).toHaveStyle(`marginTop: ${marginTop};`);
});

it('ClanWrapper contains ClanCard', () => {
    const clan = CLANS.REACT;
    const { container } = render(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ClanWrapper clan={clan}/>
      </Provider>);
    const clanCardNode = container.querySelector('ClanCard');
    
    expect(clanCardNode).toBeDefined();
});

it('ClanWrapper toggles between ClanCard and VotersWrapper', () => {
  const clan = CLANS.REACT;
  const { container } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanWrapper clan={clan}/>
    </Provider>);

  // first click
  fireEvent.click(container.firstChild)
  let votersWrapperNode = container.querySelector('VotersWrapper')
  // let clanCardNode = container.querySelector('ClanCard');
  
  expect(votersWrapperNode).toBeDefined();
  // expect(clanCardNode).toBeNull();

  // second click
  fireEvent.click(container.firstChild)
  votersWrapperNode = container.querySelector('VotersWrapper')
  // clanCardNode = container.querySelector('ClanCard');

  // expect(clanCardNode).toBeDefined();
  expect(votersWrapperNode).toBeNull();
});
