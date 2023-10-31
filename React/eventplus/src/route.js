import  React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import TipoEventosPage from './pages/TipoEventosPage/TipoEventosPage';
import EventosPage from './pages/EventosPage/EventosPage';
import LoginPage from './pages/LoginPage/LoginPage';
import TestePage from './pages/TestePage/TestePage';

const Rotas = () => {
    return (
        <BrowserRouter>
         <Routes>
            <Route element={ <HomePage/>} path={"/"} exact />
            <Route element={ <EventosPage/>} path={"/eventos"} />
            <Route element={ <TipoEventosPage/>} path={"/tipo-eventos"} />
            <Route element={ <LoginPage/>} path={"/login"} />
            <Route element={ <TestePage/>} path={"/testes"} />
         </Routes>
        </BrowserRouter>
        );
}

export default Rotas;