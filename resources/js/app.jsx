import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/Welcome';

const container = document.getElementById('root') || document.getElementById('app');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>
  );
}
