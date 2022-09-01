import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App/index.js';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement)
root.render(
     <App />,
     
);




