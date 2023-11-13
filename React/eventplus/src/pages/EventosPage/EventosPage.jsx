import React from 'react';
import ImageIllustrator from '../../componentes/ImageIllustrator/ImageIllustrator';
import Titulo from '../../componentes/Titulo/Titulo';
import eventoImage from '../../assets/images/evento.svg'
import './EventosPage.css'

const EventosPage = () => {
    return (
        <div>
            <Titulo
             titleText="Eventos page"
            />
            <ImageIllustrator imageRender={eventoImage} />
        </div>
    );
};

export default EventosPage;