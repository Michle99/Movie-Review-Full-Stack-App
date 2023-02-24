import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import App from './App';
import { Route, Routes, BrowserRouter as Router,  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={ <App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
