import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './style.css';
import Menu from './App';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Footer />
  </React.StrictMode>
);


