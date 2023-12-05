import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContex = createContext(null);

export const userDecodeToken = (theToken) => {
  const decoded = jwtDecode(theToken); //objeto do payload
  return {
    id: decoded.jti,
    role: decoded.role,
    nome: decoded.name,
    token: theToken,
  };
};
