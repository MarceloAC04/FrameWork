import React, { useState } from 'react';
import './Input.css'

const Input = ({onChange, type, placeholder, name, id, value}) => {
    // const [numero1, setNumero1] = useState(); // dado do componente em tempo real
    return (
      <>
       <input 
       type= {type}
       placeholder= {placeholder} 
       name= {name}
       id= {id}
       value={value}
        onChange={(onChange)}
        autoComplete='off'
       />
       <span>{value}</span>
      </>
    );
};

export default Input;