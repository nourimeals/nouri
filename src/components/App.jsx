import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from '../reducers';

import './App.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>Dashboard</div>
      </Provider>
    );
  }
}

export default App;
