import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


require('./styles/reset.global.scss');
require('./styles/style.global.scss');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


