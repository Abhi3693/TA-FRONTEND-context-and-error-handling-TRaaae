import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
ReactDOM.render(
  <ErrorBoundry>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundry>,
  document.getElementById('root')
);
