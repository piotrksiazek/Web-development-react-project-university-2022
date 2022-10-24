import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Landing } from './components/landing/landing';
import { Nav } from './components/main/nav/nav';
import { Main } from './components/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/portfolio" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
