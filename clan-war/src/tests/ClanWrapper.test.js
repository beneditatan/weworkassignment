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
const stargazers = [
  {
    login: 'beneditatan',
    html_url: 'https://github.com/beneditatan',
    avatar_url: 'http://cdn.shopify.com/s/files/1/1116/9250/products/PelvicSet_Enchantment_505_grande.jpg?v=1522254052'
  }
]

const clanStargazers = {
  users: stargazers,
  page: 0
}

afterEach(cleanup);

it('ClanWrapper renders without crashing', () => {
    const clan = CLANS.REACT;
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <ClanWrapper clan={clan} clanStargazers={clanStargazers}/>
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
        <ClanWrapper clan={clan} clanStargazers={clanStargazers}/>
      </Provider>);

    expect(container.firstChild).toHaveStyle(`textAlign: ${align};`);
    expect(container.firstChild).toHaveStyle(`marginTop: ${marginTop};`);
});

it('ClanWrapper contains ClanCard', () => {
    const clan = CLANS.REACT;
    const { container } = render(
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ClanWrapper clan={clan} clanStargazers={clanStargazers}/>
      </Provider>);
    const clanCardNode = container.querySelector('ClanCard');
    
    expect(clanCardNode).toBeDefined();
});


