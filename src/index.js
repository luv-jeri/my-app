import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Count } from './context/count';

ReactDOM.render(
  <React.StrictMode>
    <Count>
      <App />
    </Count>
  </React.StrictMode>,
  document.getElementById('root')
);
