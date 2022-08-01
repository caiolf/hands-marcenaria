import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../components/ScrollToTop";

import Home from '../pages/Home';
import Projetos from "../pages/Projetos";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Banheiro from "../pages/Projetos/Banheiro";
import Cozinha from "../pages/Projetos/Cozinha";
import Quarto from "../pages/Projetos/Quarto";

export default function Rotas() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/projetos/banheiro' element={<Banheiro />} />
        <Route path='/projetos/cozinha' element={<Cozinha />} />
        <Route path='/projetos/quarto' element={<Quarto />} />
      </Routes>
    </BrowserRouter>

  )
}