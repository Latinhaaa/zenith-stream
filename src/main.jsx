import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import './overrides.css';
import './features.css';
import './final-tweaks.css';
import './profile-theme.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><HashRouter><App /></HashRouter></React.StrictMode>,
);
