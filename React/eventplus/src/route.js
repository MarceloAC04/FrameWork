import  React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import EventoPage from './pages/EventoPage/EventoPage';

const Rotas = () => {
    return (
        <BrowserRouter>
         <Routes>
            <Route element={ <HomePage/>} path={"/"} exact />
            <Route element={ <EventoPage/>} path={"/eventos"} exact />
            <Route element={ <LoginPage/>} path={"/login"} />
         </Routes>
        </BrowserRouter>
        );
}

export default Rotas;