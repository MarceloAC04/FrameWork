import React, { useState } from 'react';
import Button from '../../componentes/Button/Button';
import Input from '../../componentes/Input/Input';
import Titulo from '../../componentes/Titulo/Titulo';
import './TestePage.css'

const Teste = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState();

    function handleCalcular(e) {
        e.preventDefault();
        setTotal(parseFloat(n1) + parseFloat(n2));      
    }

    return (
        <div>
              <Titulo
             titleText="Teste page"
            />
            <h1>Teste de Poc's</h1>
            <form onSubmit={handleCalcular}>
                <Input type="number" 
                       placeholder="Primeiro Número"
                       name="n1"
                       id="n1"
                       value={n1}
                       fnChange={(e) => {setN1(e.target.value)}}
                />
                <br/>
                <Input type="number" 
                       placeholder="Segundo Número"
                       name="n2"
                       id="n2"
                       value={n2}
                       fnChange={(e) => {setN2(e.target.value)}}
                />
                <br/>
                <Button 
                    textButton="Calcular"
                    type="submit" 
                    />
            <span>Resultado: <strong id='res'>{total}</strong></span>
            </form>
            {/* <p>Valor do N1:{n1}</p>
            <p>Valor do N2: {n2}</p> */}
        </div>
    );
};

export default Teste;