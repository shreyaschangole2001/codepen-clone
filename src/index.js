import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
);
// strict mode render double component, it show double textEditor that's why I am remove it
reportWebVitals();
