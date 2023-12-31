import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import './Nav.css'

const Nav = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        // alert("trocando de tema")

        // setTheme(theme === 'light' ? 'dark' : 'light')

        //outra forma de fazer:        
        const tm = theme === 'light' ? 'dark' : 'light'

        setTheme(tm)


        localStorage.setItem("theme", tm) //salvar no navegador
    }
    return (
     <nav>
        <Link to="">Home</Link> | &nbsp;
        <Link to="/produtos">Produtos</Link> | &nbsp;
        <Link to="/importante">Dados Importante</Link> | &nbsp;
        <Link to="/meus-pedidos">Dados Importante</Link> | &nbsp;
        <Link to="/login">Login</Link> | &nbsp;
        <button onClick={toggleTheme}>{theme}</button> 
     </nav>
    );
};

export default Nav;