import React from 'react';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Admin from 'pages/Admin';


export default function AppRouter() {
  return(
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>} />
          <Route path='cardapio' element={<Cardapio/>} />
          <Route path='sobre' element={<Sobre/>} />
          <Route path='admin/:user' element={<Admin/>} />
        </Route>
        <Route path='/prato/:id' element={<Prato />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  ); 
}