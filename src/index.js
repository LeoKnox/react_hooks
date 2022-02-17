import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [first, second] = ["dummy", "big dummy", "meathead"]

ReactDOM.render(
  <React.StrictMode>
    <App name={second} />
  </React.StrictMode>,
  document.getElementById('root')
);