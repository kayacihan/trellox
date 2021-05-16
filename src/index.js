import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import initData from './utils/initial-data'

const Context = createContext();


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={initData}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


