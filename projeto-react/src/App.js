import './App.css';
import { useState } from 'react';
import Home from "./pages/home/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/Fotos/fotos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />;
        <Route path='/contato' element= {<Contato />} />
        <Route path='/fotos' element= {<Fotos />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;