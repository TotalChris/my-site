import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./firebase.config";


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./sw.js").then();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
