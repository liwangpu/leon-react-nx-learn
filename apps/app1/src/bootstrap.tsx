import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
(window as any).react = require('react');
(window as any).reactDom = require('react-dom');
(window as any).jsxDevRuntime = require('react/jsx-dev-runtime.js')
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
