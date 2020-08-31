import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DrizzleContext } from '@drizzle/react-plugin';

import store from './store';
import drizzle from './drizzle';

import './index.css';

import App from './App';

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <Provider store={store}>
      <App />
    </Provider>    
  </DrizzleContext.Provider>,  
  document.getElementById('root')
);
