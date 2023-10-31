import React, { useState } from 'react';
import Button from '../../componentes/Button/Button';
import Header from '../../componentes/Header/Header';
import Input from '../../componentes/Input/Input';
import './TestePage.css'

const Teste = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    return (
        <div>
            <Header />
            <h1>Teste de Poc's</h1>

            <form action="">
                <Input type="number" 
                       placeholder="Primeiro Número"
                       name="n1"
                       id="n1"
                       value={n1}
                       onChange={(e) => {setN1(e.target.value)}}
                />
                <br/>
                <Input type="number" 
                       placeholder="Segundo Número"
                       name="n2"
                       id="n2"
                       value={n2}
                       onChange={(e) => {setN2(e.target.value)}}
                />
                <br/>
                <Button 
                    textButton="Calcular"
                    type="submit" />
            </form>
        </div>
    );
};

export default Teste;