import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Land from './pages/land';
import Epl from './pages/epl';
import Laliga from './pages/laliga';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Land/>
     <Routes>
       <Route path="/" element={<Epl/>}/>
       <Route path="/laliga" element={<Laliga/>}/>
       {/* <Route path="/epl" element={<Epl/>}/> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
