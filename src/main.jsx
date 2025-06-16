import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ResidentApp from './app.jsx';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('src/worker.jsx')
        .then((reg) => console.log('SW registered:', reg))
        .catch((err) => console.error('SW registration failed:', err));
    });
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<ResidentApp />);

