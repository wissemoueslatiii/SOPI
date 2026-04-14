import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Afficher les informations de build dans la console
if (typeof __BUILD_INFO__ !== 'undefined') {
  console.log(
    '%c🏗️ SOPI Build Info',
    'background: #0D4C4A; color: #F4A261; font-size: 14px; padding: 8px; border-radius: 4px; font-weight: bold;'
  );
  console.table(__BUILD_INFO__);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
