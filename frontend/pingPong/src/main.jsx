import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {CharContextProvider} from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharContextProvider>
      <App />
    </CharContextProvider>
  </React.StrictMode>
);
