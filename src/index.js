import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './components/Page';
import RedirectComponents from './components/RedirectComponents';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

var pjson = require('../package.json');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={pjson.baseUrl}>
    <Routes>
      <Route path="/en" element={<Page lang={'en'} />} />
      <Route path="/it" element={<Page lang={'it'} />} />
      <Route path="*" element={<RedirectComponents />} />
    </Routes>
  </BrowserRouter >
);

