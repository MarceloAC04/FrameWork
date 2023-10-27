import React from "react";
import './CardEventos.css'

const CardEvento = ( {titulo, texto, link}) => {
    return (
        <div className="card-evento">
            <h3 className="card-evento__titulo">{titulo}</h3>
            <p className="card-evento__text">Breve descrição do {texto}.</p>
            <a href="" className="card-evento__conection">Conectar {link}</a>
        </div>
    );
};

export default CardEvento;