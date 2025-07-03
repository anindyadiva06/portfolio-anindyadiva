import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);