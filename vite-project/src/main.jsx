// src/main.jsx (FIX)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; 
import ThemeProvider from './context/ThemeContext.jsx'; // Import ONLY the default export
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider> {/* Wrap App with the Provider */}
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);