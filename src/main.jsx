import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ResidentApp from './app.jsx';
import AppPage from './page.jsx';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/worker.js') // add leading slash
      .then((reg) => {
        console.log('SW registered:', reg);
        if (!navigator.serviceWorker.controller) {
          console.log('Page not controlled yet — reloading...');
          location.reload();
        }
      })
      .catch((err) => console.error('SW registration failed:', err));
  });
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<AppPage />);

