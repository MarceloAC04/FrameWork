import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MeusPedidosPage.css";

const MeusPedidosPage = () => {
  const { theme, produtos } = useContext(ThemeContext);
  return (
    <div>
      <h1>Meus Pedidos</h1>
      <h1>Página Privada</h1>
      <span>{theme}</span>
      {produtos.map((p) => {
        return (
          <>
            <div>
              {p.idProduto} |&nbsp;
              {p.descricao} |&nbsp;
              {p.preco} |&nbsp;
              {p.promo ? "sim" : "não"}
            </div>
          </>

        );
      })}
    </div>
  );
};

export default MeusPedidosPage;
