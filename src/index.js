import React from 'react';
import ReactDOM from 'react-dom';
/* --------------------------------------------- */
import * as serviceWorker from './serviceWorker';
/* --------------------------------------------- */
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
/* --------------------------------------------- */
import RootReducer from './reducers/rootReducer'
/* --------------------------------------------- */
import App from './App';
/* --------------------------------------------- */
const store = createStore(RootReducer, applyMiddleware(thunk))
/* --------------------------------------------- */
const reduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
)
/* --------------------------------------------- */
ReactDOM.render(reduxApp, document.getElementById('root'))
/* --------------------------------------------- */
serviceWorker.unregister();
