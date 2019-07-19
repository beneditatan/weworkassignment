import React from 'react';
import ReactDOM from 'react-dom';
import ClanStat from '../containers/clan-stat';
import { CLANS } from '../constants/clans'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

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
