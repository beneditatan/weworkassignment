import React from 'react';
import ReactDOM from 'react-dom';
import StatItem from '../containers/clan-stat';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

it('StatItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <StatItem value='45' unit='kg'/>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
