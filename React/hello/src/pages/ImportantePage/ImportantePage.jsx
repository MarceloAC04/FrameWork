import React, {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ImportantePage.css'

const ImportantePage = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
            <h1>Importante</h1>
            <h1>Página Privada</h1>
            <span>{theme}</span>
        </div>
    );
};

export default ImportantePage;