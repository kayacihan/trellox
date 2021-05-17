import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <div className="App">
    <div className="App-header">Trellox</div>
    <div className="App-body">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  </div>,
  document.getElementById('root')
);


