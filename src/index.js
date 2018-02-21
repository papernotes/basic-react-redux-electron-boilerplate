import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import * as reducers from './reducers';

import App from './containers/App';
import Home from './containers/Home';


const reducer = combineReducers(reducers);
const store = createStore(reducer);


render(
  <Provider store={store}>
    <App>
      <Home/>
    </App>
  </Provider>,
  document.getElementById('root')
);
