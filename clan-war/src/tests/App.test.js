import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});



