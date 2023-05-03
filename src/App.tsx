import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home, LinearRegression} from './components';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/LinearRegression" element={<LinearRegression/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
