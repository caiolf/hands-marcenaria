import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from "../pages/Portfolio";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

export default function Rotas() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>

  )
}