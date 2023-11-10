import React from 'react';
import './ImageIllustrator.css'
import tipoEventoImagem from '../../assets/images/tipo-evento.svg'
import eventoImagem from '../../assets/images/evento.svg'


const ImageIllustrator = ({alteText, imageName, additionalClass}) => {
    let imageResource;
    switch (imageName) {
        case 'tipo-evento':
            imageResource = tipoEventoImagem
            break;
        case 'evento':
            imageResource = eventoImagem
            break;
    
        default:
            imageName = defaultImage
            break;
    }
    return (
        <figure className="illustrator-box">
         <img src={imageResource} 
         alt={alteText}
         className= {`illustrator-box__image ${additionalClass}`}
         />
        </figure>
    );
};

export default ImageIllustrator;