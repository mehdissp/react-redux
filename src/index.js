import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {compose, createStore,applyMiddleware} from 'redux';

import App from './components/App';
import reducers from './reducers';

const compseEnahancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducers,compseEnahancer(applyMiddleware()));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

