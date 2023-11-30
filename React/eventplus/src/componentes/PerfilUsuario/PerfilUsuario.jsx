import React, { useContext } from "react";
import "./PerfilUsuario.css";
import iconeLogout from "../../assets/images/icone-logout.svg";
import { UserContex } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const PerfilUsuario = () => {
  const { userData, setUserData } = useContext(UserContex);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUserData({});
    navigate("/");
  };

  return (
    <div className="perfil-usuario">
      {userData.nome ? (
      <>
        <span className="perfil-usuario__menuitem">{userData.nome}</span>
        <img
          title="Deslogar"
          className="perfil-usuario__icon"
          src={iconeLogout}
          alt="imagem ilustrativa de uma porta de saída do usuário "
          onClick={logout}
        />
      </>
      ) : (
      <Link className="perfil-usuario__menuitem" to="/Login">
        Login
      </Link>
      )}
    </div>
  );
};

export default PerfilUsuario;
