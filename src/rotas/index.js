import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";

import Home from '../pages/Home';
import Projetos from "../pages/Projetos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

export default function Rotas() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>

  )
}