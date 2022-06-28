import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss'
import Navbar from './components/navbar/Navbar'
import {BackgroundTxt, BackgroundHero } from './components/landing-page/Background';
import Sidebar from './components/landing-page/sidebar/Sidebar'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar/>
   <BackgroundHero/>
   <BackgroundTxt/>
   <Sidebar/>
  </React.StrictMode>
);
///#CFCFCF
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
