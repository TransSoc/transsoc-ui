import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Land from './pages/land';
import Epl from './pages/epl';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Land/>
     <Routes>
       <Route path="/" element={<Epl/>}/>
       {/* <Route path="/epl" element={<Epl/>}/> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
