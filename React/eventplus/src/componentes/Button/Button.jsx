import React from 'react';
import './Button.css'

const Button = ({type, textButton}) => {
    return (
        <button type={type}
                textButton={textButton} >
            calcular
        </button>
    );
};

export default Button;