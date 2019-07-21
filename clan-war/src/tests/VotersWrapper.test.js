import React from 'react';
import ReactDOM from 'react-dom';
import VotersWrapper from '../containers/voters-wrapper';
import { CLANS } from '../constants/clans';

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

const clan = CLANS.REACT;

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <VotersWrapper clan={clan} clanStargazers={clanStargazers}/>,
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('VotersWrapper loads 1 on mount', () => {
  const clan = CLANS.REACT;
  const { getAllByTestId } = render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <VotersWrapper clan={clan} clanStargazers={clanStargazers}/>
    </Provider>);

  const voterNode = getAllByTestId('clan-voter');

  expect(voterNode.length).toBe(1)

});

