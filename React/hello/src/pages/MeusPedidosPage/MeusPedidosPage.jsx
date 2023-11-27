import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MeusPedidosPage.css";

const MeusPedidosPage = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div>
      <h1>Meus Pedidos</h1>
      <h1>Página Privada</h1>
      <span>{theme}</span>
    </div>
  );
};

export default MeusPedidosPage;
