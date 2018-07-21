import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore} from 'redux';

import reducers from '../reducers';

import './App.css';

import Dashboard from './dashboard/dashboard.jsx';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
