import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// imports do componentes - Páginas
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import MeusPedidosPage from "./pages/MeusPedidosPage/MeusPedidosPage";
import ImportantePage from "./pages/ImportantePage/ImportantePage";

const Rotas = () => {


  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<HomePage />} path={"/"} exact />
          <Route element={<ProdutoPage />} path={"/produtos"} exact />
          <Route element={<LoginPage />} path={"/login"} />
          <Route element={<ImportantePage />} path={"/importante"} />
          <Route element={<MeusPedidosPage />} path={"/meus-pedidos"} />
          <Route element={<HomePage />} path={"*"} />
        </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
