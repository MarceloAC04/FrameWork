import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import TipoEventosPage from "../pages/TipoEventosPage/TipoEventosPage";
import EventosAlunoPage from "../pages/EventosAlunosPage/EventosAlunosPage";
import EventosPage from "../pages/EventosPage/EventosPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import { PrivateRoute } from "./PrivateRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<HomePage />} path={"/"} exact />

        <Route 
        path={"/eventos"}
        element={
          <PrivateRoute redirectTo="/"> 
            <EventosPage />
          </PrivateRoute>
      }  
      />

        <Route 
        path={"/eventos-alunos"}
        element={
          <PrivateRoute redirectTo="/"> 
            <EventosAlunoPage />
          </PrivateRoute>
      }  
      />

        <Route 
          path={"/tipo-eventos"} 
          element={
            <PrivateRoute redirectTo="/"> 
            <TipoEventosPage />
            </PrivateRoute>
          } 
        />

        <Route element={<LoginPage />} path={"/login"} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
